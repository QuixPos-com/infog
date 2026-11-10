/**
 * Shared SVG UI & Diagram Primitives (Cards, Headers, Badges, Connections, Icons)
 */

import { THEME, renderSharedDefs } from "./theme.js";

export function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Wraps an entire infographic in a standardized SVG document with header, grid background, and footer
 */
export function renderSvgDocument({
  width = 1400,
  height = 920,
  seriesTag = "",
  title = "",
  subtitle = "",
  footerLeft = "",
  footerRight = "",
  content = "",
}) {
  const { fontFamily, colors } = THEME;

  const hasHeader = Boolean(title || seriesTag || subtitle);
  const hasFooter = Boolean(footerLeft || footerRight);
  const gridY = hasHeader ? 106 : 0;
  const gridH = height - gridY - (hasFooter ? 44 : 0);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" style="font-family: ${fontFamily}; background: ${colors.bg};">
  ${renderSharedDefs()}

  <!-- Background Base & Subtle Grid -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="${colors.bg}" />
  <rect x="0" y="${gridY}" width="${width}" height="${gridH}" fill="url(#bg-grid)" />

  ${
    hasHeader
      ? `
  <!-- Top Header Banner -->
  <rect x="0" y="0" width="${width}" height="106" fill="url(#grad-header)" />
  <line x1="0" y1="106" x2="${width}" y2="106" stroke="#3B82F6" stroke-width="3" />
  <g transform="translate(44, 30)">
    ${
      seriesTag
        ? `<rect x="0" y="-12" width="${Math.max(210, seriesTag.length * 7.8)}" height="20" rx="10" fill="#1E3A8A" stroke="#3B82F6" stroke-width="1" />
           <text x="12" y="2" fill="#93C5FD" font-size="10.5" font-weight="700" letter-spacing="1.2">${escapeXml(seriesTag)}</text>`
        : ""
    }
    ${title ? `<text x="0" y="28" fill="#FFFFFF" font-size="26" font-weight="800" letter-spacing="-0.4">${escapeXml(title)}</text>` : ""}
    ${subtitle ? `<text x="0" y="49" fill="#CBD5E1" font-size="13.5" font-weight="400">${escapeXml(subtitle)}</text>` : ""}
  </g>
  `
      : ""
  }

  <!-- Main Infographic Content -->
  ${content}

  ${
    hasFooter
      ? `
  <!-- Footer Bar -->
  <g transform="translate(0, ${height - 44})">
    <rect x="0" y="0" width="${width}" height="44" fill="#0F172A" />
    <line x1="0" y1="0" x2="${width}" y2="0" stroke="#1E293B" stroke-width="1.5" />
    ${footerLeft ? `<text x="44" y="26" fill="#94A3B8" font-size="12" font-weight="500">${escapeXml(footerLeft)}</text>` : ""}
    ${footerRight ? `<text x="${width - 44}" y="26" text-anchor="end" fill="#64748B" font-size="12" font-weight="500">${escapeXml(footerRight)}</text>` : ""}
  </g>
  `
      : ""
  }
</svg>`;
}

/**
 * Renders a stylized container card with optional top accent stripe, header, subtitle, and badge
 */
export function renderCard({
  x,
  y,
  w,
  h,
  title = "",
  subtitle = "",
  fineprint = "",
  badgeText = "",
  badgeColor = THEME.colors.primary,
  badgeBg = THEME.colors.primaryLight,
  accentColor = THEME.colors.primary,
  dashed = false,
  bg = THEME.colors.surface,
  shadow = "shadow-md",
  headerHeight = 56,
  children = "",
}) {
  const strokeDash = dashed ? `stroke-dasharray="7 5"` : "";
  const borderCol = dashed ? accentColor : THEME.colors.border;
  const strokeW = dashed ? 2 : 1.5;

  const badgeWidth = badgeText ? Math.max(76, badgeText.length * 7.2 + 24) : 0;

  return `
  <g transform="translate(${x}, ${y})">
    <!-- Card Body Base & Subtle Color Tone -->
    <rect x="0" y="0" width="${w}" height="${h}" rx="16" fill="${bg}" ${shadow ? `filter="url(#${shadow})"` : ""} />
    <rect x="0" y="0" width="${w}" height="${h}" rx="16" fill="${accentColor}" fill-opacity="0.045" stroke="${borderCol}" stroke-width="${strokeW}" ${strokeDash} />

    ${
      title || subtitle
        ? `
    <!-- Card Header Text -->
    ${title ? `<text x="22" y="${subtitle ? 30 : 32}" fill="${THEME.colors.textMain}" font-family="'Outfit Medium', 'Outfit', sans-serif" font-size="16.5" font-weight="500">${escapeXml(title)}</text>` : ""}
    ${subtitle ? `<text x="22" y="48" fill="${THEME.colors.textMuted}" font-size="12" font-weight="500">${escapeXml(subtitle)}</text>` : ""}
    <line x1="18" y1="${subtitle ? headerHeight : 46}" x2="${w - 18}" y2="${subtitle ? headerHeight : 46}" stroke="${THEME.colors.border}" stroke-width="1" />
    `
        : ""
    }

    ${
      badgeText
        ? `
    <!-- Top-Right Badge -->
    <g transform="translate(${w - badgeWidth - 18}, 15)">
      <rect x="0" y="0" width="${badgeWidth}" height="24" rx="12" fill="${badgeBg}" stroke="${badgeColor}" stroke-width="1" stroke-opacity="0.45" />
      <text x="${badgeWidth / 2}" y="16" text-anchor="middle" fill="${badgeColor}" font-size="11" font-weight="700" letter-spacing="0.4">${escapeXml(badgeText)}</text>
    </g>
    `
        : ""
    }

    <!-- Inner Card Content -->
    ${children}

    ${
      fineprint
        ? `<text x="${w / 2}" y="${h - 14}" text-anchor="middle" fill="${THEME.colors.textMuted}" font-family="'Outfit', sans-serif" font-size="11.5" font-weight="400">${escapeXml(fineprint)}</text>`
        : ""
    }
  </g>`;
}

/**
 * Renders a small pill badge
 */
export function renderPill({
  x,
  y,
  text = "",
  color = THEME.colors.primary,
  bg = THEME.colors.primaryLight,
  border = THEME.colors.primaryBorder,
  width = null,
  height = 24,
  fontSize = 11,
  icon = "",
}) {
  const w = width || Math.max(64, text.length * (fontSize * 0.62) + (icon ? 34 : 22));
  return `
  <g transform="translate(${x}, ${y})">
    <rect x="0" y="0" width="${w}" height="${height}" rx="${height / 2}" fill="${bg}" stroke="${border}" stroke-width="1.2" />
    ${icon ? `<g transform="translate(9, ${(height - 14) / 2})">${renderIcon(icon, 0, 0, 14, color)}</g>` : ""}
    ${text ? `<text x="${icon ? w / 2 + 7 : w / 2}" y="${height / 2 + fontSize * 0.36}" text-anchor="middle" fill="${color}" font-size="${fontSize}" font-weight="700">${escapeXml(text)}</text>` : ""}
  </g>`;
}

/**
 * Renders a bulleted feature list inside a card
 */
export function renderFeatureList({
  x,
  y,
  items = [],
  color = THEME.colors.primary,
  textColor = THEME.colors.textSecondary,
  fontSize = 12,
  lineHeight = 22,
}) {
  if (!items.length) return "";
  return `
  <g transform="translate(${x}, ${y})">
    ${items
      .map(
        (item, idx) => `
      <g transform="translate(0, ${idx * lineHeight})">
        <circle cx="6" cy="-4" r="3.5" fill="${color}" opacity="0.2" />
        <circle cx="6" cy="-4" r="1.8" fill="${color}" />
        <text x="16" y="0" fill="${textColor}" font-size="${fontSize}" font-weight="500">${escapeXml(item)}</text>
      </g>`
      )
      .join("")}
  </g>`;
}

/**
 * Renders a connection line with arrow markers and an optional floating protocol badge
 */
export function renderConnection({
  path,
  colorKey = "primary",
  dashed = false,
  biDirectional = true,
  endArrow = true,
  label = "",
  sublabel = "",
  labelX = 0,
  labelY = 0,
  labelWidth = 140,
  icon = "",
}) {
  const colorMap = {
    primary: { stroke: THEME.colors.primary, bg: "#EFF6FF", border: "#93C5FD" },
    teal: { stroke: THEME.colors.teal, bg: "#F0FDFA", border: "#5EEAD4" },
    emerald: { stroke: THEME.colors.emerald, bg: "#ECFDF5", border: "#6EE7B7" },
    purple: { stroke: THEME.colors.purple, bg: "#F5F3FF", border: "#C4B5FD" },
    amber: { stroke: THEME.colors.amber, bg: "#FFFBEB", border: "#FCD34D" },
    muted: { stroke: THEME.colors.textMuted, bg: "#F8FAFC", border: "#CBD5E1" },
  };
  const c = colorMap[colorKey] || colorMap.primary;
  const markerStart = biDirectional ? `marker-start="url(#arrow-${colorKey})"` : "";
  const markerEnd = endArrow ? `marker-end="url(#arrow-${colorKey})"` : "";
  const dashAttr = dashed ? `stroke-dasharray="6 5"` : "";
  const boxH = sublabel ? 38 : 26;

  return `
  <g>
    <!-- Connection Path Glow / Backing -->
    <path d="${path}" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
    <!-- Connection Path -->
    <path d="${path}" fill="none" stroke="${c.stroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" ${dashAttr} ${markerStart} ${markerEnd} />

    ${
      label
        ? `
    <!-- Connection Pill Label -->
    <g transform="translate(${labelX - labelWidth / 2}, ${labelY - boxH / 2})" filter="url(#shadow-sm)">
      <rect x="0" y="0" width="${labelWidth}" height="${boxH}" rx="${boxH / 2}" fill="#FFFFFF" stroke="${c.border}" stroke-width="1.5" />
      <rect x="3" y="3" width="${labelWidth - 6}" height="${boxH - 6}" rx="${(boxH - 6) / 2}" fill="${c.bg}" opacity="0.65" />
      ${
        icon
          ? `<g transform="translate(12, ${(boxH - 14) / 2})">${renderIcon(icon, 0, 0, 14, c.stroke)}</g>`
          : ""
      }
      <text x="${icon ? labelWidth / 2 + 7 : labelWidth / 2}" y="${sublabel ? 15 : 17}" text-anchor="middle" fill="${c.stroke}" font-size="11" font-weight="800">${escapeXml(label)}</text>
      ${
        sublabel
          ? `<text x="${icon ? labelWidth / 2 + 7 : labelWidth / 2}" y="29" text-anchor="middle" fill="${THEME.colors.textSecondary}" font-size="9.5" font-weight="600">${escapeXml(sublabel)}</text>`
          : ""
      }
    </g>
    `
        : ""
    }
  </g>`;
}

/**
 * Renders crisp mini vector icons for badges & diagrams
 */
export function renderIcon(type, x = 0, y = 0, size = 16, color = "#2563EB") {
  const s = size / 16;
  switch (type) {
    case "wifi":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1.5 6C5.2 2.5 10.8 2.5 14.5 6" />
        <path d="M4 9C6.3 6.8 9.7 6.8 12 9" />
        <circle cx="8" cy="12.5" r="1.2" fill="${color}" stroke="none" />
      </g>`;
    case "bluetooth":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4.5 4.5L11.5 11.5L8 15V1L11.5 4.5L4.5 11.5" />
      </g>`;
    case "usb":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="2" x2="8" y2="14" />
        <path d="M6 4L8 2L10 4" />
        <path d="M8 11L4.5 8.5V6" />
        <circle cx="4.5" cy="5.5" r="1.1" fill="${color}" />
        <path d="M8 9.5L11.5 7V5" />
        <rect x="10.4" y="3.5" width="2.2" height="2.2" fill="${color}" stroke="none" />
        <circle cx="8" cy="14" r="1.4" fill="${color}" />
      </g>`;
    case "lan":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5.5" y="1.5" width="5" height="3.5" rx="0.8" />
        <rect x="1.5" y="11" width="4.5" height="3.5" rx="0.8" />
        <rect x="10" y="11" width="4.5" height="3.5" rx="0.8" />
        <path d="M8 5V8M3.75 11V8H12.25V11" />
      </g>`;
    case "cloud":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4.5 13H12C13.9 13 15 11.6 15 10C15 8.5 13.9 7.2 12.3 7.1C11.9 4.5 9.7 3 7.3 3C4.7 3 2.7 4.9 2.6 7.5C1.5 7.9 1 9 1 10.2C1 11.8 2.4 13 4.5 13Z" />
      </g>`;
    case "windows":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="${color}">
        <rect x="1.5" y="2" width="5.8" height="5.4" rx="0.6" />
        <rect x="8.5" y="2" width="6" height="5.4" rx="0.6" />
        <rect x="1.5" y="8.6" width="5.8" height="5.4" rx="0.6" />
        <rect x="8.5" y="8.6" width="6" height="5.4" rx="0.6" />
      </g>`;
    case "android":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.4" stroke-linecap="round">
        <path d="M3.5 9.5C3.5 6.8 5.5 4.8 8 4.8C10.5 4.8 12.5 6.8 12.5 9.5V12.5C12.5 13.3 11.8 14 11 14H5C4.2 14 3.5 13.3 3.5 12.5V9.5Z" fill="${color}" fill-opacity="0.15" />
        <line x1="5.2" y1="2.2" x2="6.3" y2="4.8" />
        <line x1="10.8" y1="2.2" x2="9.7" y2="4.8" />
        <circle cx="6.2" cy="7.8" r="0.8" fill="${color}" stroke="none" />
        <circle cx="9.8" cy="7.8" r="0.8" fill="${color}" stroke="none" />
      </g>`;
    case "browser":
    case "chrome":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="8" cy="8" r="6.5" />
        <circle cx="8" cy="8" r="2.6" fill="${color}" fill-opacity="0.2" />
        <line x1="8" y1="5.4" x2="13.95" y2="5.4" />
        <line x1="10.25" y1="9.3" x2="7.59" y2="14.48" />
        <line x1="5.75" y1="9.3" x2="2.46" y2="4.52" />
      </g>`;
    case "shield":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5L13.5 3.8V8C13.5 11.4 11.1 13.7 8 14.8C4.9 13.7 2.5 11.4 2.5 8V3.8L8 1.5Z" fill="${color}" fill-opacity="0.12" />
        <path d="M5.8 8.2L7.3 9.7L10.5 6.5" />
      </g>`;
    case "printer":
      return `<g transform="translate(${x}, ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4.5 5.5V2H11.5V5.5" />
        <rect x="2" y="5.5" width="12" height="6" rx="1.5" />
        <rect x="4.5" y="9.5" width="7" height="4.5" fill="#FFFFFF" />
      </g>`;
    default:
      return `<circle cx="${x + 8}" cy="${y + 8}" r="4" fill="${color}" />`;
  }
}
