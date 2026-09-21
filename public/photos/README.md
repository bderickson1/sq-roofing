# Job photos

Drop Barry's real photos in this folder, then replace the `<PhotoSlot>`
components with `next/image` `<Image>` tags.

## What we need

| Where | What | Filename |
|---|---|---|
| **Gallery** | Boulder job, Flatirons in background | `job-boulder-flatirons.jpg` ✅ |
| **Gallery** | Brown shingles, skylight + box vents | `job-skylight-brown-shingle.jpg` ✅ |
| **Gallery** | Charcoal shingles, continuous ridge vent | `job-charcoal-ridge-vent.jpg` ✅ |
| **Gallery** | Grey hip roof, farmland behind | `job-plains-gray-hip-roof.jpg` ✅ |
| Homepage hero | Wide shot of a finished roof, mountains behind if possible | `hero-roof.jpg` |
| Homepage "Who you're hiring" | Barry on site, portrait orientation | `barry-portrait.jpg` |
| About page | Barry or the crew on a roof, wide landscape | `barry-wide.jpg` |
| Insurance claims hero | Hail damage close-up, or storm clouds | `hail-damage.jpg` |
| Each service page | One representative shot per service | `service-<slug>.jpg` |

## Guidelines

- Landscape shots at least 1600px wide; portraits at least 1200px wide.
- Shoot in good light. Overcast is fine and often better than harsh midday sun.
- Before/after pairs from the same angle are the single most persuasive thing
  you can put on a roofing site. Take the "before" shot on every job.
- Avoid photos with other companies' signage, trucks, or yard signs visible.
- No identifiable house numbers if the homeowner hasn't agreed to be featured.

---

---

## Processing job photos before they go in

Phone photos come off the camera around 5712x4284 and 8-13 MB. Do not commit
them at that size — the four in this folder went from ~34 MB total to 1.8 MB
with no visible quality loss.

They also carry an EXIF orientation flag rather than being stored upright. That
flag can get dropped during image optimisation, which shows the photo on its
side. Bake the rotation into the pixels instead.

`sharp` is already available via Next.js. From the project root:

```js
// resize.cjs — run with: node resize.cjs
const sharp = require("sharp");
const fs = require("fs");
const buf = fs.readFileSync("public/photos/INPUT.jpg");   // read to a Buffer:
sharp(buf)                                                // sharp holds a lock
  .rotate()                                               // bake in EXIF rotation
  .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .toBuffer()
  .then((d) => fs.writeFileSync("public/photos/OUTPUT.jpg", d));
```

Watch out for Windows adding a second extension when you save (`name.jpg.jpg`).
The filenames in the table above must match exactly.

All gallery photos are 3:4 portrait, which is what `aspect-[3/4]` in
`src/app/gallery/page.tsx` expects. Landscape shots will letterbox or crop.
