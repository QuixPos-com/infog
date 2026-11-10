/**
 * Main SVG Infographic Generator Script
 * Run with: node generate.js (or npm run build)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { generatePhysicalSetupSvg } from "./src/infographics/01-physical-setup.js";
import { generateSoftwareArchitectureSvg } from "./src/infographics/02-software-architecture.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "output");
fs.mkdirSync(outputDir, { recursive: true });

const infographics = [
  {
    id: "01-pos-physical-setup",
    filename: "01-pos-physical-setup.svg",
    title: "Infografik #1: Physischer Kassenaufbau (POS Hardware-Setup)",
    svg: generatePhysicalSetupSvg(),
  },
  {
    id: "02-software-architecture",
    filename: "02-software-architecture.svg",
    title: "Infografik #2: QuixPOS Software-Architektur",
    svg: generateSoftwareArchitectureSvg(),
  },
];

for (const item of infographics) {
  const outPath = path.join(outputDir, item.filename);
  fs.writeFileSync(outPath, item.svg, "utf8");
  console.log(`✔ Generated: ${outPath}`);
}

// Generate an HTML gallery viewer for convenient inspection & printing
const galleryHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuixPOS Infografiken – Übersicht</title>
  <style>
    :root {
      color-scheme: light;
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 32px 24px 64px;
      font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0F172A;
      color: #F8FAFC;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      padding-bottom: 16px;
      border-bottom: 1px solid #334155;
    }
    header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 800;
    }
    header p {
      margin: 4px 0 0;
      color: #94A3B8;
      font-size: 14px;
    }
    .card {
      background: #1E293B;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 36px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.35);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .card-header h2 {
      margin: 0;
      font-size: 18px;
      color: #E2E8F0;
    }
    .actions a {
      display: inline-block;
      padding: 8px 14px;
      background: #2563EB;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      margin-left: 8px;
    }
    .actions a:hover {
      background: #1D4ED8;
    }
    .svg-frame {
      background: #F8FAFC;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #475569;
    }
    .svg-frame img {
      display: block;
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <h1>QuixPOS Infografiken</h1>
        <p>Generierte Vektor-Infografiken (Standalone SVG) aus gemeinsamen Komponenten</p>
      </div>
    </header>

    ${infographics
      .map(
        (item) => `
    <section class="card">
      <div class="card-header">
        <h2>${item.title}</h2>
        <div class="actions">
          <a href="./${item.filename}" target="_blank">SVG im neuen Tab öffnen</a>
          <a href="./${item.filename}" download="${item.filename}">SVG herunterladen</a>
        </div>
      </div>
      <div class="svg-frame">
        <img src="./${item.filename}" alt="${item.title}" />
      </div>
    </section>`
      )
      .join("\n")}
  </div>
</body>
</html>`;

const indexPath = path.join(outputDir, "index.html");
fs.writeFileSync(indexPath, galleryHtml, "utf8");
console.log(`✔ Generated gallery: ${indexPath}`);

