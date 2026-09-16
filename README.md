# Interactive Scrollytelling Portfolio

A high-end, immersive developer portfolio built with Next.js, Framer Motion, and Tailwind CSS. Designed to deliver an Apple-like scroll experience with dynamic 3D elements, cursor tracking, and fluid typography.

## ✨ Features

- **Immersive Scrollytelling:** Features a 144-frame cinematic scroll sequence as the hero section.
- **3D Interactive Canvas:** Deep space particle background that reacts to mouse movement using Three.js and React Three Fiber.
- **Dynamic Scroll Animations:** Content reveals, text emergence, and glitch effects powered by Framer Motion.
- **Mobile Optimized:** Intelligent device detection (`useIsMobile` hook) scales down heavy 3D computations and skips massive image preloads on mobile devices to guarantee 60fps performance while maintaining aesthetics.
- **Custom UI Components:** Custom-built components including `PixelatedImageTrail`, `SocialFlipButton`, `TextNoise`, and more.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **3D Graphics:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)

## 🚀 Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
*(Note: To test on local network devices like your phone, the server is configured to bind to `0.0.0.0`).*

## 🌍 Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the repository into your Vercel dashboard.
3. Vercel will automatically detect the Next.js framework and configure the build settings.
4. Click **Deploy**.

## 🤝 Contact

Feel free to reach out for collaborations or just a good conversation:
- [GitHub](https://github.com/Namanrai324)
- [Email](mailto:namanroy183@gmail.com)
