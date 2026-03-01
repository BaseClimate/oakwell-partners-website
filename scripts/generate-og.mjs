import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "images", "og-image.jpg");

// OG image dimensions
const W = 1200;
const H = 630;

// Brand colours
const darkTeal = "#0E4446";
const deepTeal = "#1B6B6D";
const warmGold = "#C7944A";

// Oak leaf SVG path (from the site logo), rendered large at 40% opacity
const leafPath = `M16 0C16 0 12 6 12 12C12 15 13 17 14.5 18.5C12.5 18 10 16.5 8 14C8 14 7 18 10 22C11.5 23.5 13.5 24.5 15 25L14.5 32H17.5L17 25C18.5 24.5 20.5 23.5 22 22C25 18 24 14 24 14C22 16.5 19.5 18 17.5 18.5C19 17 20 15 20 12C20 6 16 0 16 0Z`;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${darkTeal}"/>
      <stop offset="50%" stop-color="#0F4A4C"/>
      <stop offset="100%" stop-color="${darkTeal}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Large oak leaf on the left at 40% opacity -->
  <g transform="translate(60, 80) scale(14)" opacity="0.4">
    <path d="${leafPath}" fill="${deepTeal}"/>
  </g>

  <!-- Subtle radial glow -->
  <circle cx="600" cy="315" r="350" fill="${deepTeal}" opacity="0.15"/>

  <!-- "Oakwell Partners" -->
  <text x="600" y="260" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="72" font-weight="bold" fill="white"
        letter-spacing="1">Oakwell Partners</text>

  <!-- Tagline in warm gold -->
  <text x="600" y="340" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="30" fill="${warmGold}"
        letter-spacing="2">HVAC Contract Cancellation Advocates</text>

  <!-- Thin gold rule -->
  <line x1="400" y1="370" x2="800" y2="370"
        stroke="${warmGold}" stroke-width="1.5" opacity="0.6"/>

  <!-- Domain -->
  <text x="600" y="530" text-anchor="middle"
        font-family="'Source Sans Pro', 'Segoe UI', Arial, sans-serif"
        font-size="22" fill="white" opacity="0.8"
        letter-spacing="1.5">oakwellpartners.ca</text>
</svg>`;

const buf = await sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(outPath);

console.log(`✓ OG image generated: ${outPath}`);
console.log(`  ${buf.width}×${buf.height}, ${(buf.size / 1024).toFixed(0)} KB`);
