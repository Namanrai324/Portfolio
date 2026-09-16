"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

const SPIN_AT_50 = 1.1

const FREQ_AT_100 = 1.15

const FIELD_MS = 33

const LX = -0.42
const LY = 0.55
const LZ = 0.72

const STREAM_BASE_DEG = 138

const GRAD_EPS = 0.09

const GLYPH_FRAC = 0.86
const MAX_GLYPHS = 24

const DEFAULT_GLYPHS = "<Cv/>U-\\"

function hash3(i: number, j: number, k: number) {
    let n = Math.imul(i, 374761393) ^ Math.imul(j, 668265263) ^ Math.imul(k, 1274126177)
    n = Math.imul(n ^ (n >>> 13), 1274126177)
    n = n ^ (n >>> 16)
    return (n >>> 0) / 4294967295
}

function vnoise(x: number, y: number, z: number) {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const zi = Math.floor(z)
    let fx = x - xi
    let fy = y - yi
    let fz = z - zi
    fx = fx * fx * (3 - 2 * fx)
    fy = fy * fy * (3 - 2 * fy)
    fz = fz * fz * (3 - 2 * fz)
    const c000 = hash3(xi, yi, zi)
    const c100 = hash3(xi + 1, yi, zi)
    const c010 = hash3(xi, yi + 1, zi)
    const c110 = hash3(xi + 1, yi + 1, zi)
    const c001 = hash3(xi, yi, zi + 1)
    const c101 = hash3(xi + 1, yi, zi + 1)
    const c011 = hash3(xi, yi + 1, zi + 1)
    const c111 = hash3(xi + 1, yi + 1, zi + 1)
    const x00 = c000 + (c100 - c000) * fx
    const x10 = c010 + (c110 - c010) * fx
    const x01 = c001 + (c101 - c001) * fx
    const x11 = c011 + (c111 - c011) * fx
    const y0 = x00 + (x10 - x00) * fy
    const y1 = x01 + (x11 - x01) * fy
    return y0 + (y1 - y0) * fz
}

function fbm(x: number, y: number, z: number) {
    return vnoise(x, y, z) * 0.86 + vnoise(x * 2.3 + 11.7, y * 2.3 - 5.1, z * 1.4 + 3.3) * 0.14
}

function rotAboutAxis(
    px: number,
    py: number,
    pz: number,
    ax: number,
    ay: number,
    c: number,
    s: number,
    out: Float64Array
) {
    const dotA = ax * px + ay * py
    const crx = ay * pz
    const cry = -ax * pz
    const crz = ax * py - ay * px
    const k = dotA * (1 - c)
    out[0] = px * c + crx * s + ax * k
    out[1] = py * c + cry * s + ay * k
    out[2] = pz * c + crz * s
}

const SCRATCH_B = new Float64Array(3)

const SCRATCH_W = new Float64Array(3)

function surfaceSample(
    u: number,
    v: number,
    z: number,
    ax: number,
    ay: number,
    ct: number,
    st: number,
    freq: number,
    out: Float64Array
) {
    rotAboutAxis(u, v, z, ax, ay, ct, -st, SCRATCH_B)
    let bx = SCRATCH_B[0]
    let by = SCRATCH_B[1]
    let bz = SCRATCH_B[2]

    const bl = Math.hypot(bx, by, bz) || 1
    bx /= bl
    by /= bl
    bz /= bl

    let hx = 0
    let hy = 0
    let hz = 1
    if (bz > 0.9 || bz < -0.9) {
        hx = 1
        hz = 0
    }
    let t1x = hy * bz - hz * by
    let t1y = hz * bx - hx * bz
    let t1z = hx * by - hy * bx
    const t1l = Math.hypot(t1x, t1y, t1z) || 1
    t1x /= t1l
    t1y /= t1l
    t1z /= t1l
    const t2x = by * t1z - bz * t1y
    const t2y = bz * t1x - bx * t1z
    const t2z = bx * t1y - by * t1x

    const f0 = fbm(bx * freq, by * freq, bz * freq)
    const f1 = fbm(
        (bx + GRAD_EPS * t1x) * freq,
        (by + GRAD_EPS * t1y) * freq,
        (bz + GRAD_EPS * t1z) * freq
    )
    const f2 = fbm(
        (bx + GRAD_EPS * t2x) * freq,
        (by + GRAD_EPS * t2y) * freq,
        (bz + GRAD_EPS * t2z) * freq
    )
    const d1 = f1 - f0
    const d2 = f2 - f0

    rotAboutAxis(
        t1x * d1 + t2x * d2,
        t1y * d1 + t2y * d2,
        t1z * d1 + t2z * d2,
        ax,
        ay,
        ct,
        st,
        out
    )
    return f0
}

function buildAtlas(chars: string, tile: number, color: string) {
    const cv = document.createElement("canvas")
    cv.width = Math.max(1, tile * chars.length)
    cv.height = tile
    const g = cv.getContext("2d")
    if (!g) return cv
    g.font = `${Math.max(
        4,
        Math.round(tile * GLYPH_FRAC)
    )}px ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`
    g.textAlign = "center"
    g.textBaseline = "middle"
    g.fillStyle = color
    for (let i = 0; i < chars.length; i++) {
        g.fillText(chars[i], i * tile + tile / 2, tile / 2)
    }
    return cv
}

function cleanGlyphs(raw: unknown) {
    const s = typeof raw === "string" ? raw.replace(/\s+/g, "") : ""
    return (s.length ? s : DEFAULT_GLYPHS).slice(0, MAX_GLYPHS)
}

const clamp = (v: number, lo: number, hi: number) =>
    v < lo ? lo : v > hi ? hi : v

interface SurfaceGroup {
    detail?: number
    coverage?: number
}

interface AsciiFlameBallProps {
    background?: string
    baseColor?: string
    density?: number
    size?: number
    speed?: number
    direction?: number
    tilt?: number
    glyphs?: string
    surface?: SurfaceGroup
    width?: number | string
    height?: number | string
    style?: CSSProperties
}

interface Live {
    background: string
    baseColor: string
    density: number
    size: number
    speed: number
    direction: number
    tilt: number
    glyphs: string
    detail: number
    coverage: number
}

function __OriginkitBase_AsciiFlameBall(props: AsciiFlameBallProps) {
    const {
        background = "transparent",
        baseColor = "#E9EB14",
        density = 80,
        size = 65,
        speed = 100,
        direction = 116,
        tilt = 45,
        glyphs = "<Cv/>U-\\",

        surface = {},
        width = "100%",
        height = "100%",
        style,
    } = props
    const { detail = 290, coverage = 40 } = surface

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const live = useRef<Live>({
        background,
        baseColor,
        density,
        size,
        speed,
        direction,
        tilt,
        glyphs,
        detail,
        coverage,
    }).current
    Object.assign(live, {
        background,
        baseColor,
        density,
        size,
        speed,
        direction,
        tilt,
        glyphs,
        detail,
        coverage,
    })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        let raf = 0
        let last = 0
        let theta = 0

        let W = 0
        let H = 0
        let cols = 0
        let rows = 0
        let cell = 0
        let tile = 0
        let originX = 0
        let originY = 0
        let gIdx = new Int16Array(0)
        let gAlpha = new Uint8Array(0)
        let gx = new Int32Array(0)
        let gy = new Int32Array(0)
        let atlas: HTMLCanvasElement | null = null
        let atlasKey = ""
        let atlasChars = DEFAULT_GLYPHS
        let acc = 1e9

        const ll = Math.hypot(LX, LY, LZ)
        const lx = LX / ll
        const ly = LY / ll
        const lz = LZ / ll

        const buildField = (radius: number) => {
            const chars = atlasChars
            const N = chars.length
            const freq = (clamp(live.detail, 10, 300) / 100) * FREQ_AT_100
            const cov = clamp(live.coverage, 0, 100)

            const T = 1.05 - (cov / 100) * 0.95

            const tr = (clamp(live.tilt, -60, 60) * Math.PI) / 180
            const ax = Math.sin(tr)
            const ay = Math.cos(tr)

            const phi = ((live.direction - STREAM_BASE_DEG) * Math.PI) / 180
            const cp = Math.cos(phi)
            const sp = Math.sin(phi)

            const ct = Math.cos(theta)
            const st = Math.sin(theta)

            gIdx.fill(-1)

            for (let r = 0; r < rows; r++) {
                const py = originY + (r + 0.5) * cell
                const v = (H / 2 - py) / radius
                const row = r * cols
                if (v * v >= 1) continue
                const uMax = Math.sqrt(1 - v * v)

                const c0 = Math.max(
                    0,
                    Math.ceil((W / 2 - uMax * radius - originX) / cell - 0.5)
                )
                const c1 = Math.min(
                    cols - 1,
                    Math.floor((W / 2 + uMax * radius - originX) / cell - 0.5)
                )
                for (let c = c0; c <= c1; c++) {
                    const px = originX + (c + 0.5) * cell
                    const u = (px - W / 2) / radius
                    const d2 = u * u + v * v
                    if (d2 >= 1) continue

                    const z = Math.sqrt(1 - d2)
                    const ur = u * cp - v * sp
                    const vr = u * sp + v * cp

                    const f0 = surfaceSample(
                        ur,
                        vr,
                        z,
                        ax,
                        ay,
                        ct,
                        st,
                        freq,
                        SCRATCH_W
                    )
                    const wx = SCRATCH_W[0]
                    const wy = SCRATCH_W[1]

                    const lam = ur * lx + vr * ly + z * lz
                    const lamP = lam > 0 ? lam : 0

                    const w = 0.62 * lamP + 0.85 * (f0 - 0.5) + 0.5
                    if (w < T) continue

                    const sx = wx * cp + wy * sp
                    const sy = -wx * sp + wy * cp
                    const ang = Math.atan2(sy, sx)
                    let bin = Math.floor(((ang + Math.PI) / (2 * Math.PI)) * N)
                    if (bin < 0) bin = 0
                    else if (bin >= N) bin = N - 1

                    const shade = 0.22 + 0.78 * Math.pow(lamP, 0.85)

                    const i = row + c
                    gIdx[i] = bin
                    gAlpha[i] = Math.round(clamp(shade, 0, 1) * 255)
                }
            }
        }

        const render = (now: number) => {
            if (!last) last = now
            let dt = (now - last) / 1000
            last = now
            if (dt > 0.05) dt = 0.05

            const omega = (clamp(live.speed, -100, 100) / 50) * SPIN_AT_50
            theta += omega * dt

            const TAU = Math.PI * 2
            if (theta >= TAU || theta <= -TAU) theta %= TAU

            const cssW = canvas.clientWidth || 300
            const cssH = canvas.clientHeight || 300
            const nW = Math.max(1, Math.round(cssW * dpr))
            const nH = Math.max(1, Math.round(cssH * dpr))
            const radius = (clamp(live.size, 5, 100) / 100) * Math.min(nW, nH) / 2
            const nCell = (2 * radius) / clamp(Math.round(live.density), 8, 160)
            const nCols = Math.max(1, Math.ceil(nW / nCell) + 1)
            const nRows = Math.max(1, Math.ceil(nH / nCell) + 1)

            if (nW !== W || nH !== H) {
                W = nW
                H = nH
                canvas.width = W
                canvas.height = H
                acc = 1e9
            }
            if (nCols !== cols || nRows !== rows || nCell !== cell) {
                cols = nCols
                rows = nRows
                cell = nCell
                originX = W / 2 - (cols / 2) * cell
                originY = H / 2 - (rows / 2) * cell
                const n = cols * rows
                if (gIdx.length !== n) {
                    gIdx = new Int16Array(n)
                    gAlpha = new Uint8Array(n)
                }
                tile = Math.max(4, Math.round(cell))
                gx = new Int32Array(cols)
                gy = new Int32Array(rows)
                for (let c = 0; c < cols; c++)
                    gx[c] = Math.round(originX + c * cell + (cell - tile) / 2)
                for (let r = 0; r < rows; r++)
                    gy[r] = Math.round(originY + r * cell + (cell - tile) / 2)
                acc = 1e9
            }

            const chars = cleanGlyphs(live.glyphs)
            const key = `${tile}|${chars}|${live.baseColor}`
            if (key !== atlasKey) {
                atlasKey = key
                atlasChars = chars
                atlas = buildAtlas(chars, tile, live.baseColor || "#B9B9B9")
                acc = 1e9
            }

            acc += dt * 1000
            if (acc >= FIELD_MS) {
                acc = 0
                buildField(radius)

                ctx.clearRect(0, 0, W, H)
                const img = atlas as HTMLCanvasElement
                for (let r = 0; r < rows; r++) {
                    const row = r * cols
                    const yy = gy[r]
                    for (let c = 0; c < cols; c++) {
                        const i = row + c
                        const gi = gIdx[i]
                        if (gi < 0) continue
                        ctx.globalAlpha = gAlpha[i] / 255
                        ctx.drawImage(
                            img,
                            gi * tile,
                            0,
                            tile,
                            tile,
                            gx[c],
                            yy,
                            tile,
                            tile
                        )
                    }
                }
                ctx.globalAlpha = 1
            }

            raf = requestAnimationFrame(render)
        }

        raf = requestAnimationFrame(render)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: typeof width === "number" ? `${width}px` : width,
                height: typeof height === "number" ? `${height}px` : height,
                zIndex: -1,
                pointerEvents: "none",
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{ display: "block", width: "100%", height: "100%", background }}
            />
        </div>
    )
}

const __originkitPresetProps = {
  "surface": {
    "detail": 300,
    "coverage": 40
  }
};

export default function AsciiFlameBall(props: Record<string, unknown>) {
  return <__OriginkitBase_AsciiFlameBall {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}
