/**
 * Infographic #2: QuixPOS Software Architecture
 * - QuixPOS Dashboard (cloud hosted, or hosted as Windows service)
 * - QuixPOS (actual POS app, running as Android app or webpage)
 * - Printer Agent (standalone or app integrated, shares local printers to cloud dashboard)
 */

import { THEME } from "../shared/theme.js";
import {
  renderSvgDocument,
  renderCard,
  renderConnection,
  renderIcon,
} from "../shared/primitives.js";
import {
  renderPosTablet12,
  renderEpsonTmM30III,
  renderLabelPrinter,
} from "../shared/devices.js";

/**
 * Uniform platform icon badge — each platform always uses its own fixed color
 */
function renderPlatformBadge(iconType, x, y) {
  const { colors } = THEME;
  const platformStyle = {
    android: { grad: "url(#grad-emerald)", border: colors.emeraldBorder },
    windows: { grad: "url(#grad-primary)", border: colors.primaryBorder },
    cloud: { grad: "url(#grad-purple)", border: colors.purpleBorder },
    browser: { grad: "url(#grad-teal)", border: colors.tealBorder },
  }[iconType] || { grad: "url(#grad-primary)", border: colors.primaryBorder };

  return `
  <g transform="translate(${x}, ${y})" filter="url(#shadow-sm)">
    <rect x="0" y="0" width="52" height="52" rx="12" fill="#FFFFFF" stroke="${platformStyle.border}" stroke-width="1.5" />
    <rect x="10" y="10" width="32" height="32" rx="8" fill="${platformStyle.grad}" />
    ${renderIcon(iconType, 18, 18, 16, "#FFFFFF")}
  </g>`;
}

/**
 * Renders two platform badges side-by-side with a "/" between them
 */
function renderPlatformPair(iconA, iconB, x, y) {
  const { colors } = THEME;
  return `
  <g transform="translate(${x}, ${y})">
    ${renderPlatformBadge(iconA, 0, 0)}
    <text x="64" y="34" text-anchor="middle" fill="${colors.textMuted}" font-family="'Outfit Medium', 'Outfit', sans-serif" font-size="24" font-weight="500">/</text>
    ${renderPlatformBadge(iconB, 76, 0)}
  </g>`;
}

function renderDashboardPreview({ x = 0, y = 0, scale = 1 }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    <rect x="0" y="0" width="210" height="134" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.8" filter="url(#shadow-md)" />
    <rect x="0" y="0" width="210" height="22" rx="8" fill="#1E293B" />
    <circle cx="13" cy="11" r="4" fill="#2563EB" />
    <rect x="23" y="8" width="58" height="6" rx="3" fill="#475569" />
    <rect x="154" y="6" width="46" height="10" rx="5" fill="#334155" />
    <circle cx="161" cy="11" r="2.2" fill="#60A5FA" />

    <!-- KPI Cards -->
    <rect x="10" y="30" width="58" height="30" rx="4" fill="#1E293B" stroke="#475569" stroke-width="0.8" />
    <rect x="16" y="36" width="32" height="4" rx="2" fill="#64748B" />
    <rect x="16" y="45" width="40" height="8" rx="2" fill="#60A5FA" />

    <rect x="76" y="30" width="58" height="30" rx="4" fill="#1E293B" stroke="#475569" stroke-width="0.8" />
    <rect x="82" y="36" width="32" height="4" rx="2" fill="#64748B" />
    <rect x="82" y="45" width="38" height="8" rx="2" fill="#60A5FA" />

    <rect x="142" y="30" width="58" height="30" rx="4" fill="#1E293B" stroke="#475569" stroke-width="0.8" />
    <rect x="148" y="36" width="32" height="4" rx="2" fill="#64748B" />
    <rect x="148" y="45" width="42" height="8" rx="2" fill="#94A3B8" />

    <!-- Chart Area -->
    <rect x="10" y="68" width="190" height="56" rx="5" fill="#1E293B" stroke="#334155" stroke-width="0.8" />
    <rect x="22" y="102" width="14" height="14" rx="1.5" fill="#3B82F6" />
    <rect x="42" y="94" width="14" height="22" rx="1.5" fill="#3B82F6" />
    <rect x="62" y="86" width="14" height="30" rx="1.5" fill="#60A5FA" />
    <rect x="82" y="91" width="14" height="25" rx="1.5" fill="#3B82F6" />
    <rect x="102" y="80" width="14" height="36" rx="1.5" fill="#2563EB" />
    <rect x="128" y="82" width="62" height="34" rx="4" fill="#0F172A" stroke="#475569" stroke-width="0.8" />
  </g>`;
}

export function generateSoftwareArchitectureSvg() {
  const { colors } = THEME;

  const content = `
    <!-- 1. TOP CENTER BOX: QuixPOS Dashboard -->
    ${renderCard({
      x: 450,
      y: 36,
      w: 500,
      h: 250,
      title: "QuixPOS Dashboard",
      fineprint: "Cloud oder Windows Service",
      accentColor: colors.purple,
      shadow: "shadow-lg",
      children: `
        ${renderPlatformPair("cloud", "windows", 32, 105)}
        ${renderDashboardPreview({ x: 212, y: 62, scale: 1.08 })}
      `,
    })}

    <!-- 2. BOTTOM LEFT BOX: QuixPOS -->
    ${renderCard({
      x: 110,
      y: 336,
      w: 500,
      h: 250,
      title: "QuixPOS",
      fineprint: "Android-App oder Webseite",
      accentColor: colors.primary,
      shadow: "shadow-md",
      children: `
        ${renderPlatformPair("android", "browser", 32, 105)}
        ${renderPosTablet12({ x: 196, y: 50, scale: 0.94, showStand: false })}
      `,
    })}

    <!-- 3. BOTTOM RIGHT BOX: Printer Agent -->
    ${renderCard({
      x: 790,
      y: 336,
      w: 500,
      h: 250,
      title: "Printer Agent",
      fineprint: "Standalone oder App-integriert",
      accentColor: colors.emerald,
      shadow: "shadow-md",
      children: `
        ${renderPlatformPair("android", "windows", 22, 105)}
        <path d="M 162 131 L 198 131" stroke="${colors.emerald}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-emerald)" />
        ${renderEpsonTmM30III({ x: 202, y: 58, scale: 0.85, showTseCallout: false })}
        ${renderLabelPrinter({ x: 326, y: 58, scale: 0.86 })}
      `,
    })}

    <!-- CONNECTIONS BETWEEN THE 3 BOXES -->
    ${renderConnection({
      path: "M 360 336 L 360 161 L 450 161",
      colorKey: "primary",
      biDirectional: true,
    })}

    ${renderConnection({
      path: "M 1040 336 L 1040 161 L 950 161",
      colorKey: "emerald",
      biDirectional: true,
    })}

    ${renderConnection({
      path: "M 610 461 L 790 461",
      colorKey: "teal",
      biDirectional: true,
    })}
  `;

  return renderSvgDocument({
    width: 1400,
    height: 622,
    content,
  });
}
