$ErrorActionPreference = "Stop"
git reset HEAD~1
git add src package.json package-lock.json next.config.ts postcss.config.mjs eslint.config.mjs tailwind.config.ts tsconfig.json public/images
git commit -m "Add source code"
git push -u origin main

$images = Get-ChildItem -Path public/sequence/*.png
$batchSize = 50

for ($i = 0; $i -lt $images.Count; $i += $batchSize) {
    $batch = $images[$i..($i + $batchSize - 1)]
    foreach ($img in $batch) {
        if ($null -ne $img) {
            git add $img.FullName
        }
    }
    git commit -m "Add image sequence batch $($i / $batchSize + 1)"
    git push -u origin main
}

git add .
git commit -m "Add remaining files"
git push -u origin main
