/**
 * Shared Theme, Color Palette, and SVG <defs> for QuixPOS Infographics
 */

export const THEME = {
  fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif",
  monoFont: "'JetBrains Mono', 'Cascadia Code', 'Consolas', monospace",

  colors: {
    bg: "#F8FAFC",
    bgAccent: "#F1F5F9",
    surface: "#FFFFFF",
    surfaceAlt: "#F8FAFC",
    border: "#E2E8F0",
    borderStrong: "#CBD5E1",

    textMain: "#0F172A",
    textSecondary: "#334155",
    textMuted: "#64748B",
    textLight: "#94A3B8",

    // Primary Brand / POS Accent (Indigo / Royal Blue)
    primary: "#2563EB",
    primaryDark: "#1D4ED8",
    primaryLight: "#EFF6FF",
    primaryBorder: "#BFDBFE",

    // Secondary / Teal (Customer Display / Web / Sync)
    teal: "#0D9488",
    tealDark: "#0F766E",
    tealLight: "#F0FDFA",
    tealBorder: "#99F6E4",

    // Emerald / Green (Printer Agent / TSE Security / Success)
    emerald: "#059669",
    emeraldDark: "#047857",
    emeraldLight: "#ECFDF5",
    emeraldBorder: "#A7F3D0",

    // Amber / Orange (TSE USB Highlight / Barcode / Hardware Callout)
    amber: "#D97706",
    amberDark: "#B45309",
    amberLight: "#FFFBEB",
    amberBorder: "#FDE68A",

    // Purple / Violet (Cloud / Dashboard / Bluetooth)
    purple: "#7C3AED",
    purpleDark: "#6D28D9",
    purpleLight: "#F5F3FF",
    purpleBorder: "#DDD6FE",

    // Rose / Red (Scanner Laser / Important Badges)
    rose: "#E11D48",
    roseLight: "#FFF1F2",
    roseBorder: "#FECDD3",

    // Hardware Greys
    deviceDark: "#1E293B",
    deviceBezel: "#0F172A",
    deviceBody: "#334155",
    deviceSilver: "#E2E8F0",
  },
};

/**
 * Generates shared SVG <defs> (shadows, gradients, markers, patterns)
 */
export function renderSharedDefs() {
  const { colors } = THEME;
  return `
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&amp;display=swap');
    </style>
    <!-- Subtle Dot Grid Pattern -->
    <pattern id="bg-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#CBD5E1" opacity="0.55" />
    </pattern>

    <!-- Card Drop Shadows -->
    <filter id="shadow-sm" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.06" />
    </filter>
    <filter id="shadow-md" x="-12%" y="-10%" width="124%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.08" />
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.04" />
    </filter>
    <filter id="shadow-lg" x="-15%" y="-12%" width="130%" height="135%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.12" />
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.06" />
    </filter>
    <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#D97706" flood-opacity="0.28" />
    </filter>

    <!-- Gradients -->
    <linearGradient id="grad-header" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="55%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>

    <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#5B21B6" />
    </linearGradient>

    <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>

    <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#0F766E" />
    </linearGradient>

    <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <linearGradient id="grad-screen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#EFF6FF" />
    </linearGradient>

    <linearGradient id="grad-dark-metal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <linearGradient id="grad-printer-body" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <linearGradient id="grad-laser" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#E11D48" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#E11D48" stop-opacity="0.05" />
    </linearGradient>

    <!-- Arrow Markers for Connection Lines -->
    <marker id="arrow-primary" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.primary}" />
    </marker>
    <marker id="arrow-teal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.teal}" />
    </marker>
    <marker id="arrow-emerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.emerald}" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.purple}" />
    </marker>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.amber}" />
    </marker>
    <marker id="arrow-muted" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.textMuted}" />
    </marker>
  </defs>`;
}

