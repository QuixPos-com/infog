/**
 * Shared Hardware & Software Vector Illustrations for QuixPOS Infographics
 * Reused across Infographic #1 (Physical Setup) and Infographic #2 (Software Architecture)
 */

/**
 * 12" POS Tablet in Landscape Orientation
 * Base dimensions: ~300 x 215 (including stand)
 */
export function renderPosTablet12({
  x = 0,
  y = 0,
  scale = 1,
  showStand = true,
}) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    ${
      showStand
        ? `
    <!-- Aluminum POS Counter Stand -->
    <path d="M 115 172 L 96 208 L 204 208 L 185 172 Z" fill="url(#grad-dark-metal)" />
    <rect x="78" y="204" width="144" height="8" rx="4" fill="#1E293B" filter="url(#shadow-sm)" />
    <ellipse cx="150" cy="213" rx="82" ry="4" fill="#0F172A" opacity="0.12" />
    `
        : ""
    }

    <!-- Tablet Outer Chassis (12" Landscape 16:10 ratio) -->
    <rect x="10" y="6" width="280" height="174" rx="14" fill="#0F172A" stroke="#334155" stroke-width="2" filter="url(#shadow-md)" />
    <!-- Inner Bezel Highlight -->
    <rect x="13" y="9" width="274" height="168" rx="11" fill="none" stroke="#475569" stroke-width="0.8" opacity="0.6" />
    <!-- Front Camera Dot (Top Center) -->
    <circle cx="150" cy="14" r="2" fill="#334155" />

    <!-- Screen Viewport -->
    <rect x="20" y="19" width="260" height="150" rx="6" fill="#F1F5F9" />

    <!-- Top Navigation Bar Wireframe -->
    <rect x="20" y="19" width="260" height="22" rx="4" fill="#1E293B" />
    <circle cx="31" cy="30" r="5" fill="#2563EB" />
    <rect x="42" y="27" width="64" height="6" rx="3" fill="#475569" />
    <rect x="192" y="24" width="36" height="12" rx="6" fill="#334155" />
    <circle cx="199" cy="30" r="2.2" fill="#60A5FA" />
    <rect x="232" y="24" width="42" height="12" rx="6" fill="#334155" />
    <circle cx="239" cy="30" r="2.2" fill="#60A5FA" />

    <!-- Category Pills Row Wireframe -->
    <g transform="translate(26, 46)">
      <rect x="0" y="0" width="38" height="13" rx="4" fill="#2563EB" />
      <rect x="42" y="0" width="36" height="13" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.8" />
      <rect x="82" y="0" width="34" height="13" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.8" />
      <rect x="120" y="0" width="34" height="13" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.8" />
    </g>

    <!-- Product Grid (3x3 Tiles on Left Side - Unified Palette) -->
    <g transform="translate(26, 64)">
      <rect x="0" y="0" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="0" y="0" width="48" height="4" rx="2" fill="#3B82F6" />
      <rect x="6" y="10" width="32" height="5" rx="2" fill="#CBD5E1" />
      <rect x="6" y="19" width="20" height="5" rx="2" fill="#93C5FD" />

      <rect x="53" y="0" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="53" y="0" width="48" height="4" rx="2" fill="#3B82F6" />
      <rect x="59" y="10" width="28" height="5" rx="2" fill="#CBD5E1" />
      <rect x="59" y="19" width="20" height="5" rx="2" fill="#93C5FD" />

      <rect x="106" y="0" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="106" y="0" width="48" height="4" rx="2" fill="#3B82F6" />
      <rect x="112" y="10" width="34" height="5" rx="2" fill="#CBD5E1" />
      <rect x="112" y="19" width="20" height="5" rx="2" fill="#93C5FD" />

      <rect x="0" y="35" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="0" y="35" width="48" height="4" rx="2" fill="#64748B" />
      <rect x="6" y="45" width="30" height="5" rx="2" fill="#CBD5E1" />
      <rect x="6" y="54" width="20" height="5" rx="2" fill="#94A3B8" />

      <rect x="53" y="35" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="53" y="35" width="48" height="4" rx="2" fill="#64748B" />
      <rect x="59" y="45" width="28" height="5" rx="2" fill="#CBD5E1" />
      <rect x="59" y="54" width="22" height="5" rx="2" fill="#94A3B8" />

      <rect x="106" y="35" width="48" height="30" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="106" y="35" width="48" height="4" rx="2" fill="#64748B" />
      <rect x="112" y="45" width="32" height="5" rx="2" fill="#CBD5E1" />
      <rect x="112" y="54" width="20" height="5" rx="2" fill="#94A3B8" />

      <rect x="0" y="70" width="48" height="28" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="6" y="78" width="28" height="5" rx="2" fill="#CBD5E1" />
      <rect x="6" y="87" width="18" height="5" rx="2" fill="#E2E8F0" />

      <rect x="53" y="70" width="48" height="28" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="59" y="78" width="28" height="5" rx="2" fill="#CBD5E1" />
      <rect x="59" y="87" width="18" height="5" rx="2" fill="#E2E8F0" />

      <rect x="106" y="70" width="48" height="28" rx="4" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1" />
      <rect x="118" y="81" width="24" height="6" rx="3" fill="#93C5FD" />
    </g>

    <!-- Right Cart / Receipt Panel Wireframe -->
    <g transform="translate(186, 46)">
      <rect x="0" y="0" width="88" height="117" rx="5" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" />
      <rect x="8" y="8" width="52" height="5" rx="2.5" fill="#94A3B8" />
      <line x1="6" y1="18" x2="82" y2="18" stroke="#E2E8F0" stroke-width="1" />

      <rect x="8" y="24" width="44" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="64" y="24" width="16" height="4.5" rx="2" fill="#94A3B8" />

      <rect x="8" y="36" width="40" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="64" y="36" width="16" height="4.5" rx="2" fill="#94A3B8" />

      <rect x="8" y="48" width="46" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="64" y="48" width="16" height="4.5" rx="2" fill="#94A3B8" />

      <line x1="6" y1="64" x2="82" y2="64" stroke="#CBD5E1" stroke-dasharray="2 2" />
      <rect x="8" y="71" width="32" height="4" rx="2" fill="#E2E8F0" />
      <rect x="64" y="71" width="16" height="4" rx="2" fill="#E2E8F0" />

      <rect x="8" y="82" width="28" height="6" rx="2" fill="#64748B" />
      <rect x="56" y="82" width="24" height="6" rx="2" fill="#2563EB" />

      <!-- Pay CTA Button -->
      <rect x="6" y="95" width="76" height="17" rx="4" fill="url(#grad-primary)" />
    </g>
  </g>`;
}

/**
 * 8" Customer Display Tablet in Portrait Orientation
 * Base dimensions: ~135 x 195
 */
export function renderCustomerDisplay8({ x = 0, y = 0, scale = 1, showStand = true }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    ${
      showStand
        ? `
    <!-- Portrait Stand Base -->
    <path d="M 52 156 L 42 182 L 93 182 L 83 156 Z" fill="url(#grad-dark-metal)" />
    <rect x="32" y="179" width="71" height="6" rx="3" fill="#1E293B" />
    `
        : ""
    }

    <!-- 8" Tablet Chassis (Portrait) -->
    <rect x="12" y="6" width="111" height="154" rx="12" fill="#0F172A" stroke="#334155" stroke-width="2" filter="url(#shadow-md)" />
    <circle cx="67.5" cy="13" r="1.8" fill="#334155" />

    <!-- Screen Viewport -->
    <rect x="19" y="19" width="97" height="133" rx="5" fill="#F8FAFC" />

    <!-- Header Banner on Customer Screen -->
    <rect x="19" y="19" width="97" height="24" rx="4" fill="url(#grad-primary)" />
    <rect x="36" y="28" width="63" height="6" rx="3" fill="#DBEAFE" opacity="0.85" />

    <!-- Line Items Wireframe -->
    <g transform="translate(25, 53)">
      <rect x="0" y="-4" width="50" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="66" y="-4" width="19" height="4.5" rx="2" fill="#94A3B8" />

      <rect x="0" y="8" width="44" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="66" y="8" width="19" height="4.5" rx="2" fill="#94A3B8" />

      <rect x="0" y="20" width="52" height="4.5" rx="2" fill="#CBD5E1" />
      <rect x="66" y="20" width="19" height="4.5" rx="2" fill="#94A3B8" />

      <line x1="0" y1="31" x2="85" y2="31" stroke="#CBD5E1" stroke-width="1" />
    </g>

    <!-- Total Highlight Box -->
    <rect x="25" y="90" width="85" height="26" rx="5" fill="#EFF6FF" stroke="#93C5FD" stroke-width="1" />
    <rect x="44" y="99" width="47" height="8" rx="3" fill="#2563EB" opacity="0.8" />

    <!-- QR Prompt Wireframe -->
    <rect x="25" y="121" width="85" height="24" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <rect x="30" y="126" width="14" height="14" rx="1.5" fill="#0F172A" />
    <rect x="32" y="128" width="4" height="4" fill="#FFFFFF" />
    <rect x="38" y="128" width="4" height="4" fill="#FFFFFF" />
    <rect x="32" y="134" width="4" height="4" fill="#FFFFFF" />
    <rect x="50" y="128" width="48" height="4.5" rx="2" fill="#CBD5E1" />
    <rect x="50" y="135" width="36" height="4" rx="2" fill="#E2E8F0" />
  </g>`;
}

/**
 * SumUp Solo Touchscreen Card Reader
 * Base dimensions: ~160 x 160
 */
export function renderSumUpSolo({ x = 0, y = 0, scale = 1 }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    <!-- Outer Square White Casing with Rounded Corners -->
    <rect x="6" y="6" width="148" height="148" rx="24" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" filter="url(#shadow-md)" />
    <!-- Subtle Inner Bezel Contour -->
    <rect x="10" y="10" width="140" height="140" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />

    <!-- Square Touchscreen Viewport -->
    <rect x="24" y="24" width="112" height="112" rx="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8" />

    <!-- Top Status Bar: Center Chevron + Signal, Wi-Fi, Battery -->
    <path d="M 75 30 L 80 32.5 L 85 30" fill="none" stroke="#0F172A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Signal Bars -->
    <rect x="97" y="31.5" width="1.2" height="2" fill="#0F172A" />
    <rect x="99.2" y="30.2" width="1.2" height="3.3" fill="#0F172A" />
    <rect x="101.4" y="28.8" width="1.2" height="4.7" fill="#0F172A" />

    <!-- Mini Wi-Fi Icon -->
    <path d="M 105.5 30.2 Q 108 28 110.5 30.2" fill="none" stroke="#0F172A" stroke-width="1.1" stroke-linecap="round" />
    <path d="M 106.7 31.6 Q 108 30.3 109.3 31.6" fill="none" stroke="#0F172A" stroke-width="1.1" stroke-linecap="round" />
    <circle cx="108" cy="33" r="0.7" fill="#0F172A" />

    <!-- Battery Icon -->
    <rect x="125.5" y="28.8" width="6.5" height="4.2" rx="0.8" fill="none" stroke="#0F172A" stroke-width="0.9" />
    <rect x="126.5" y="29.7" width="4.5" height="2.4" fill="#0F172A" />
    <rect x="132.2" y="30.1" width="0.8" height="1.6" fill="#0F172A" />

    <!-- Main Amount Display Placeholder -->
    <rect x="52" y="38" width="56" height="14" rx="3" fill="#0F172A" />

    <!-- Subtitle Checkmark -->
    <circle cx="80" cy="60.5" r="3.6" fill="#0F172A" />
    <path d="M 78.4 60.5 L 79.6 61.7 L 81.8 59.4" fill="none" stroke="#FFFFFF" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Touch Numeric Keypad (4x3 Dots/Keys) -->
    <g fill="#0F172A">
      <circle cx="50" cy="73" r="2.2" />
      <circle cx="80" cy="73" r="2.2" />
      <circle cx="110" cy="73" r="2.2" />
      <circle cx="50" cy="85.5" r="2.2" />
      <circle cx="80" cy="85.5" r="2.2" />
      <circle cx="110" cy="85.5" r="2.2" />
      <circle cx="50" cy="98" r="2.2" />
      <circle cx="80" cy="98" r="2.2" />
      <circle cx="110" cy="98" r="2.2" />
      <circle cx="50" cy="110.5" r="2.2" />
      <circle cx="80" cy="110.5" r="2.2" />
    </g>
    <!-- Backspace Arrow (Row 4, Col 3) -->
    <path d="M 113.5 110.2 L 106.5 110.2 M 109.5 107.4 L 106.5 110.2 L 109.5 113" fill="none" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Bottom Confirm Button -->
    <rect x="30" y="118" width="100" height="14" rx="2.5" fill="#0F172A" />
    <path d="M 75.5 125 L 78.5 128 L 84.5 122" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>`;
}

export const renderSumUpLite = renderSumUpSolo;

/**
 * Epson TM-m30III Receipt Printer (Isometric 3D Matte-Black Cube) with Epson TSE USB Stick
 * Base dimensions: ~255 x 175
 */
export function renderEpsonTmM30III({ x = 0, y = 0, scale = 1, showTseCallout = true }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    <!-- Isometric Epson TM-m30III Cube -->
    <g filter="url(#shadow-md)">
      <!-- Drop Shadow Base Polygon -->
      <polygon points="16,124 76,164 136,124 76,88" fill="#0F172A" opacity="0.22" />

      <!-- LEFT VERTICAL FACE (Darker Matte Black) -->
      <polygon points="14,46 76,84 76,162 14,122" fill="#1F2227" stroke="#111317" stroke-width="1" stroke-linejoin="round" />

      <!-- Bottom-Left Cable Cover Notch on Left Face -->
      <polygon points="18,108 25,113 25,127 18,122" fill="#181A1F" stroke="#0F1115" stroke-width="0.8" />

      <!-- Top-Left Hinge Curve Detail on Left Face -->
      <path d="M 14 54 C 20 58 23 55 23 49 L 18 46" fill="none" stroke="#0F1115" stroke-width="1.2" />

      <!-- FRONT-RIGHT VERTICAL FACE (Charcoal Matte Black) -->
      <polygon points="76,84 138,46 135,122 76,162" fill="#2B2E34" stroke="#181A1F" stroke-width="1" stroke-linejoin="round" />

      <!-- NFC Mark in Upper-Right Corner of Front-Right Face -->
      <g transform="translate(128, 72) skewY(-31.5)">
        <rect x="-3.5" y="-4" width="7" height="7" rx="1" fill="none" stroke="#9CA3AF" stroke-width="0.9" />
        <path d="M -1.8 1.5 L -1.8 -2 L 1.8 1.5 L 1.8 -2" fill="none" stroke="#9CA3AF" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- TOP DIAMOND FACE BASE -->
      <polygon points="76,8 138,46 76,84 14,46" fill="#26292E" stroke="#14161A" stroke-width="1" stroke-linejoin="round" />

      <!-- Back-Left Narrow Rim Strip -->
      <polygon points="76,8 80,10.5 18,48.5 14,46" fill="#2D3138" stroke="#111317" stroke-width="0.9" />

      <!-- Main Top Paper Cover Lid -->
      <polygon points="80,10.5 127,39.2 65,77.2 18,48.5" fill="#282B30" stroke="#14161A" stroke-width="1" />

      <!-- Subtle Touch Controls on Top-Back Corner (Power & Feed) -->
      <g transform="translate(80, 19) rotate(31) skewX(-30)" opacity="0.55">
        <circle cx="0" cy="0" r="2.2" fill="none" stroke="#9CA3AF" stroke-width="0.8" />
        <line x1="0" y1="-2.6" x2="0" y2="-0.5" stroke="#9CA3AF" stroke-width="0.8" />
        <rect x="6" y="-2" width="4" height="4" rx="0.6" fill="none" stroke="#9CA3AF" stroke-width="0.7" />
      </g>

      <!-- Paper Exit Slot Seam (Between Main Lid and Front-Right Status Bar) -->
      <line x1="65" y1="77.2" x2="127" y2="39.2" stroke="#090A0C" stroke-width="2.6" />
      <line x1="72" y1="72.9" x2="73.5" y2="72" stroke="#9CA3AF" stroke-width="1.3" />
      <line x1="115" y1="46.5" x2="116.5" y2="45.6" stroke="#9CA3AF" stroke-width="1.3" />

      <!-- Front-Right Status Strip (Between Paper Slot and Front-Right Edge) -->
      <polygon points="65,77.2 117,45.3 128,52 76,84" fill="#31353C" stroke="#181A1F" stroke-width="0.9" />

      <!-- Top-Right Cover Open Lever Button -->
      <polygon points="117,45.3 127,39.2 138,46 128,52" fill="#2D3138" stroke="#111317" stroke-width="1" />
      <polyline points="128,52 128,55 138,48.8" fill="none" stroke="#111317" stroke-width="1" />

      <!-- Status Icons & LED Indicator Bars Along Front-Right Bevel -->
      <circle cx="82.5" cy="75.2" r="1.6" fill="none" stroke="#CBD5E1" stroke-width="0.7" />
      <line x1="82.5" y1="78.2" x2="86.2" y2="75.9" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" />
      <circle cx="84.3" cy="77" r="2.2" fill="#38BDF8" opacity="0.45" />

      <line x1="88" y1="71.2" x2="89.2" y2="72.5" stroke="#9CA3AF" stroke-width="0.8" stroke-linecap="round" />
      <line x1="89.5" y1="73.9" x2="93.2" y2="71.6" stroke="#64748B" stroke-width="1.3" stroke-linecap="round" />

      <rect x="94.5" y="66.8" width="2.6" height="2" rx="0.4" transform="rotate(-31, 95.8, 67.8)" fill="none" stroke="#9CA3AF" stroke-width="0.7" />
      <line x1="96.5" y1="69.6" x2="100.2" y2="67.3" stroke="#94A3B8" stroke-width="1.3" stroke-linecap="round" />

      <circle cx="103" cy="62.8" r="1.1" fill="none" stroke="#9CA3AF" stroke-width="0.7" />
      <line x1="103.5" y1="65.3" x2="107.2" y2="63" stroke="#94A3B8" stroke-width="1.3" stroke-linecap="round" />

      <path d="M 108.5 58.8 Q 110 57.2 111.5 58.5" fill="none" stroke="#9CA3AF" stroke-width="0.8" stroke-linecap="round" />
      <line x1="110.5" y1="61" x2="114.2" y2="58.7" stroke="#94A3B8" stroke-width="1.3" stroke-linecap="round" />

      <path d="M 116.5 53.5 L 117.8 55.2" stroke="#9CA3AF" stroke-width="0.8" stroke-linecap="round" />
      <line x1="117.5" y1="56.7" x2="121.2" y2="54.4" stroke="#94A3B8" stroke-width="1.3" stroke-linecap="round" />

      <line x1="76" y1="84" x2="76" y2="161" stroke="#3F444E" stroke-width="1" />
    </g>

    ${
      showTseCallout
        ? `
    <!-- Connector Callout from Printer Rear/Bottom USB Port to TSE USB Stick -->
    <path d="M 134 118 L 154 118" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="3 2" />
    <circle cx="134" cy="118" r="4" fill="#F59E0B" />

    <!-- Epson TSE-TR03153 Metallic Unibody USB Stick (Angled 3D Perspective) -->
    <g transform="translate(154, 18)" filter="url(#shadow-md)">
      <rect x="4" y="4" width="98" height="128" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2" />

      <!-- Rotated 3D Silver Stick Group -->
      <g transform="translate(56, 68) rotate(32)">
        <!-- 3D Right Side Thickness Wall (Darker Brushed Metal) -->
        <path d="
          M 21 -38
          C 21 -44 17 -48 11 -48
          L 16 -44
          C 21 -44 25 -40 25 -34
          L 25 44
          L 21 40
          Z
        " fill="#64748B" />
        <polygon points="21,-36 25,-32 25,44 21,40" fill="#475569" stroke="#334155" stroke-width="0.6" />

        <!-- Main Brushed Silver Unibody Top Face -->
        <path d="
          M -11 -48
          L 11 -48
          C 17 -48 21 -44 21 -38
          L 21 40
          L -21 40
          L -21 -38
          C -21 -44 -17 -48 -11 -48
          Z
        " fill="#E2E8F0" stroke="#94A3B8" stroke-width="1" />

        <!-- Subtle Metallic Sheen Overlay on Left Half -->
        <path d="M -20 -38 C -20 -43 -16 -47 -11 -47 L 0 -47 L 0 39 L -20 39 Z" fill="#F8FAFC" opacity="0.55" />

        <!-- Top Keyring / Lanyard Cutout Slot with 3D Inner Bevel -->
        <rect x="-13" y="-43" width="26" height="12" rx="5" fill="#334155" stroke="#64748B" stroke-width="0.9" />
        <rect x="-11" y="-40.5" width="22" height="9" rx="3.8" fill="#0F172A" />
        <path d="M -11 -35 C -11 -39 11 -39 11 -35" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.65" />

        <!-- 2D DataMatrix Code Grid -->
        <g transform="translate(-9, -16)" fill="#786B59">
          <rect x="0" y="0" width="1.6" height="18" />
          <rect x="0" y="16.4" width="18" height="1.6" />
          <rect x="3" y="0" width="1.6" height="1.6" />
          <rect x="6" y="0" width="1.6" height="1.6" />
          <rect x="9" y="0" width="1.6" height="1.6" />
          <rect x="12" y="0" width="1.6" height="1.6" />
          <rect x="15" y="0" width="1.6" height="1.6" />
          <rect x="16.4" y="2.5" width="1.6" height="1.6" />
          <rect x="16.4" y="5.5" width="1.6" height="1.6" />
          <rect x="16.4" y="8.5" width="1.6" height="1.6" />
          <rect x="16.4" y="11.5" width="1.6" height="1.6" />
          <rect x="16.4" y="14.5" width="1.6" height="1.6" />
          <rect x="3" y="3" width="3" height="2" />
          <rect x="8" y="2.5" width="2" height="3.5" />
          <rect x="12" y="3" width="3" height="2.5" />
          <rect x="2.5" y="6.5" width="2.5" height="3" />
          <rect x="6.5" y="7" width="4" height="2" />
          <rect x="12" y="7.5" width="2.5" height="3" />
          <rect x="3.5" y="11" width="3" height="2.5" />
          <rect x="8" y="10.5" width="2.5" height="3.5" />
          <rect x="11.5" y="12" width="3.5" height="2.5" />
          <rect x="4.5" y="14.2" width="2" height="1.8" />
          <rect x="10" y="14.2" width="2.5" height="1.8" />
        </g>

        <!-- Bottom-Front Open USB-A Mouth with Blue USB 3.0 Tongue -->
        <polygon points="-21,40 21,40 25,44 -17,44" fill="#1E293B" stroke="#334155" stroke-width="0.7" />
        <polygon points="-18,40.6 18,40.6 20.5,43.1 -15.5,43.1" fill="#0284C7" />
        <line x1="-14" y1="41.8" x2="17" y2="41.8" stroke="#38BDF8" stroke-width="0.7" />
      </g>
    </g>
    `
        : ""
    }
  </g>`;
}

/**
 * Inateck BCST-60 Wireless Handheld Barcode Scanner (Black & Neon Yellow-Green Two-Tone)
 * Base dimensions: ~240 x 175
 */
export function renderBarcodeScanner({ x = 0, y = 0, scale = 1 }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    <!-- Scanned Product Barcode Card on the Left (in front of lens) -->
    <g transform="translate(8, 22)" filter="url(#shadow-sm)">
      <rect x="0" y="0" width="66" height="54" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2" />
      <!-- Barcode Bars -->
      <g transform="translate(11, 12)" fill="#0F172A">
        <rect x="0" y="0" width="2.5" height="30" />
        <rect x="4.5" y="0" width="1.2" height="30" />
        <rect x="8" y="0" width="3.5" height="30" />
        <rect x="14" y="0" width="1.5" height="30" />
        <rect x="18" y="0" width="2.5" height="30" />
        <rect x="23" y="0" width="1.2" height="30" />
        <rect x="26.5" y="0" width="4" height="30" />
        <rect x="33" y="0" width="1.5" height="30" />
        <rect x="36.5" y="0" width="2.5" height="30" />
        <rect x="41" y="0" width="2" height="30" />
      </g>
    </g>

    <!-- Inateck BCST-60 Handheld Scanner (Three-Quarter Left Profile, Yellow-Green & Matte Black) -->
    <g transform="translate(96, 4)" filter="url(#shadow-md)">
      <!-- Rear Top Yellow-Green Cap & Black Indicator Clip -->
      <path d="M 88 22 C 98 22 110 25 114 31 L 84 31 Z" fill="#C8DC32" stroke="#A4B81E" stroke-width="0.8" />
      <path d="M 94 19 L 108 23 L 107 25.5 L 93 21.5 Z" fill="#18181B" />

      <!-- Yellow-Green Body / Neck & Rear Spine -->
      <path d="
        M 62 52
        L 116 48
        C 116 54 112 58 107 62
        C 104 68 102 82 100 98
        C 99 112 98 128 97 140
        L 83 142
        L 79 98
        L 62 94
        C 57 86 55 80 54 75
        Z
      " fill="#C8DC32" stroke="#AFC422" stroke-width="1" />

      <!-- Subtle Contour Line & Buzzer Vents on Yellow-Green Neck -->
      <path d="M 97 104 L 91 110 L 90 137" fill="none" stroke="#9EB31B" stroke-width="0.9" />
      <line x1="99" y1="57" x2="103" y2="53" stroke="#7E9112" stroke-width="1.4" stroke-linecap="round" />
      <line x1="102" y1="59" x2="105" y2="55" stroke="#7E9112" stroke-width="1.4" stroke-linecap="round" />
      <line x1="105" y1="60" x2="107" y2="57" stroke="#7E9112" stroke-width="1.4" stroke-linecap="round" />

      <!-- Black Ergonomic Trigger (Recessed Under Chin) -->
      <path d="M 60 54 C 68 56 72 66 71 76 C 70 83 65 86 58 84 L 51 80 C 55 73 56 64 52 56 Z" fill="#18181B" stroke="#3F3F46" stroke-width="1" />
      <path d="M 53 57 C 58 64 57 73 52 79" fill="none" stroke="#52525B" stroke-width="1.2" stroke-linecap="round" />

      <!-- Lower Black Front Grip & Flared Base Foot -->
      <path d="
        M 60 88
        L 80 91
        C 83 92 84 95 83 101
        L 79 109
        L 82 138
        L 97 138
        C 99 141 99 147 96 151
        L 94 157
        C 90 163 72 167 57 166
        C 49 165 45 160 44 155
        C 42 151 45 146 53 142
        C 60 139 62 135 62 126
        C 62 112 63 98 60 88
        Z
      " fill="url(#grad-printer-body)" stroke="#18181B" stroke-width="1.2" />

      <!-- Base Foot Rim Line -->
      <path d="M 44 154 C 54 158 78 157 95 151" fill="none" stroke="#09090B" stroke-width="1.5" />

      <!-- Large Matte Black Protective Hood & Rear Bumper Band -->
      <path d="
        M 16 14
        C 26 6 48 4 68 12
        C 78 16 84 24 89 31
        L 115 31
        C 120 33 121 44 116 49
        L 78 50
        C 72 50 67 55 60 57
        C 48 60 32 54 22 44
        C 12 34 9 20 16 14
        Z
      " fill="#27272A" stroke="#18181B" stroke-width="1.4" />

      <!-- Side Pill Groove in Black Rear Bumper -->
      <rect x="75" y="36" width="42" height="8" rx="4" fill="#18181B" stroke="#3F3F46" stroke-width="0.8" />

      <!-- Top Embossed Groove on Hood -->
      <path d="M 38 8 C 47 8 57 11 63 16 L 56 18 C 50 13 41 10 33 10 Z" fill="#18181B" />

      <!-- Recessed Front Oval Scanner Window / Bezel -->
      <g transform="translate(29, 34) rotate(-28)">
        <ellipse cx="0" cy="0" rx="13" ry="20" fill="#18181B" stroke="#3F3F46" stroke-width="1.4" />
        <ellipse cx="2" cy="0" rx="9.5" ry="15.5" fill="#09090B" />
        <ellipse cx="4" cy="-2" rx="6" ry="11" fill="#1E293B" opacity="0.65" />
      </g>
    </g>
  </g>`;
}

/**
 * Zebra ZD220/ZD230 Desktop Thermal Label Printer (Three-Quarter Perspective with Shipping Label)
 * Base dimensions: ~165 x 175
 */
export function renderLabelPrinter({ x = 0, y = 0, scale = 1 }) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    <g filter="url(#shadow-md)">
      <!-- Base Drop Shadow -->
      <ellipse cx="78" cy="112" rx="58" ry="18" transform="rotate(-12, 78, 112)" fill="#0F172A" opacity="0.22" />

      <!-- Rear-Left Circular Hinge Cap -->
      <ellipse cx="14" cy="43" rx="3.2" ry="6.5" transform="rotate(-18, 14, 43)" fill="#1E2229" stroke="#0F1115" stroke-width="1" />

      <!-- Lower Chassis Base (Under Clamshell Seam) -->
      <path d="
        M 16 49
        L 22 90
        C 23 95 26 99 30 102
        L 52 121
        C 56 124 62 125 69 123
        L 132 104
        C 136 102 138 98 139 92
        L 140 62
        L 56 84
        Z
      " fill="#1E2228" stroke="#0F1115" stroke-width="1.1" stroke-linejoin="round" />

      <!-- Lower Left Side Darker Shading -->
      <path d="
        M 16 49
        L 22 90
        C 23 95 26 99 30 102
        L 52 121
        C 55 123 57 124 59 124
        L 56 84
        Z
      " fill="#171A20" />

      <!-- Bottom Base Foot Indent Line -->
      <path d="M 25 96 L 53 119 C 56 121 61 121 66 120" fill="none" stroke="#090A0D" stroke-width="1.5" />

      <!-- Front Exit Slot Recession -->
      <polygon points="62,80 135,61 134,74 62,93" fill="#0B0D10" />

      <!-- Upper Clamshell Main Hood (Top & Right Curved Body) -->
      <path d="
        M 15 48
        C 11 31 18 17 33 13
        L 76 4
        C 91 1 106 8 117 21
        C 127 33 135 46 140 62
        L 56 84
        Z
      " fill="#2B3038" stroke="#111317" stroke-width="1.1" stroke-linejoin="round" />

      <!-- Upper Clamshell Left Side Face (3D Contour & Highlight) -->
      <path d="
        M 15 48
        C 11 31 18 17 33 13
        C 42 18 52 34 59 54
        L 56 84
        Z
      " fill="#20242B" />

      <!-- Specular Highlight Along Left Shoulder Ridge -->
      <path d="M 31 14 C 42 19 52 36 58 58 L 56 72" fill="none" stroke="#475569" stroke-width="1.6" stroke-linecap="round" opacity="0.55" />

      <!-- Front Fascia Bevel Band (Above Paper Slot) -->
      <polygon points="56,72 137,51 140,62 56,84" fill="#22262E" stroke="#111317" stroke-width="0.9" stroke-linejoin="round" />

      <!-- Clamshell Parting Seam Line on Left Side -->
      <line x1="15" y1="48" x2="56" y2="84" stroke="#0B0D10" stroke-width="1.8" />

      <!-- Orange Clamshell Release Latch on Left Side -->
      <g>
        <polygon points="36,59 44,66 44,78 36,71" fill="#F59E0B" stroke="#78350F" stroke-width="0.9" stroke-linejoin="round" />
        <polygon points="44,66 46.5,65 46.5,77 44,78" fill="#D97706" stroke="#78350F" stroke-width="0.7" stroke-linejoin="round" />
        <line x1="38.5" y1="63" x2="38.5" y2="71" stroke="#B45309" stroke-width="1" stroke-linecap="round" />
      </g>

      <!-- 3 Parallel Recessed Top Lid Grooves -->
      <line x1="43" y1="11" x2="60" y2="30" stroke="#14171C" stroke-width="1.5" stroke-linecap="round" />
      <line x1="55" y1="8.5" x2="72" y2="27.5" stroke="#14171C" stroke-width="1.5" stroke-linecap="round" />
      <line x1="67" y1="6" x2="84" y2="25" stroke="#14171C" stroke-width="1.5" stroke-linecap="round" />

      <!-- Recessed Top Control Panel Bezel -->
      <path d="
        M 57 35
        L 94 26
        L 105 43
        L 68 53
        Z
      " fill="#363C46" stroke="#1B1F26" stroke-width="1" stroke-linejoin="round" />

      <!-- Power Button (White Circle on Control Panel) -->
      <ellipse cx="69" cy="41.5" rx="3.8" ry="3.2" transform="rotate(-14, 69, 41.5)" fill="#F8FAFC" />
      <circle cx="69" cy="41.5" r="1.7" fill="none" stroke="#334155" stroke-width="0.8" />
      <line x1="69" y1="39.5" x2="69" y2="41.3" stroke="#334155" stroke-width="0.8" stroke-linecap="round" />

      <!-- Green Status LED Dot -->
      <circle cx="86.5" cy="38.5" r="1.6" fill="#A3E635" />

      <!-- Feed Button (White Rounded Rect on Control Panel) -->
      <polygon points="90,34.5 97,32.8 99.5,37 92.5,38.8" fill="#F8FAFC" />
      <rect x="92.5" y="34.8" width="4" height="2.2" transform="rotate(-14, 94.5, 35.9)" fill="none" stroke="#334155" stroke-width="0.6" />

      <!-- Tiny ZEBRA Label on Control Panel -->
      <line x1="79" y1="45.5" x2="91" y2="42.3" stroke="#E2E8F0" stroke-width="1.8" stroke-linecap="round" />
      <line x1="93" y1="41.8" x2="98" y2="40.5" stroke="#94A3B8" stroke-width="1.1" stroke-linecap="round" />

      <!-- White Zebra Logo Mark on Front-Right Fascia -->
      <g transform="translate(125, 55) scale(0.75)" fill="none" stroke="#F8FAFC" stroke-width="1.3" stroke-linecap="round">
        <path d="M 0 4 L 4 0 M 2 6 L 7 1 M 4 8 L 9 3 M 6 9 L 9 7" />
      </g>

      <!-- Printed Thermal Shipping Label Strip Flowing Out of Slot -->
      <g transform="translate(64, 81) rotate(-14.5) skewX(20)">
        <!-- Paper Base -->
        <rect x="0" y="0" width="66" height="82" rx="1.5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.9" />

        <!-- Shipping Label Grid Dividers -->
        <line x1="3" y1="15" x2="63" y2="15" stroke="#334155" stroke-width="0.6" />
        <line x1="36" y1="2" x2="36" y2="33" stroke="#334155" stroke-width="0.6" />
        <line x1="3" y1="33" x2="63" y2="33" stroke="#334155" stroke-width="0.6" />
        <line x1="3" y1="46" x2="63" y2="46" stroke="#334155" stroke-width="0.6" />
        <line x1="42" y1="46" x2="42" y2="60" stroke="#334155" stroke-width="0.6" />
        <line x1="3" y1="60" x2="63" y2="60" stroke="#334155" stroke-width="0.7" />

        <!-- Top Address Block Lines -->
        <rect x="5" y="4" width="14" height="1.5" fill="#1E293B" />
        <rect x="5" y="7" width="24" height="1.2" fill="#64748B" />
        <rect x="5" y="9.5" width="20" height="1.2" fill="#64748B" />
        <rect x="39" y="4" width="12" height="1.5" fill="#1E293B" />
        <rect x="39" y="7" width="20" height="1.2" fill="#64748B" />
        <rect x="39" y="9.5" width="18" height="1.2" fill="#64748B" />

        <!-- Upper Barcode (Left Cell) -->
        <g transform="translate(6, 20)" fill="#0F172A">
          <rect x="0" y="0" width="1.2" height="9" />
          <rect x="2.2" y="0" width="0.7" height="9" />
          <rect x="4" y="0" width="1.6" height="9" />
          <rect x="6.8" y="0" width="0.8" height="9" />
          <rect x="8.8" y="0" width="1.4" height="9" />
          <rect x="11.2" y="0" width="0.7" height="9" />
          <rect x="13" y="0" width="1.8" height="9" />
          <rect x="16" y="0" width="0.9" height="9" />
          <rect x="18" y="0" width="1.3" height="9" />
          <rect x="20.5" y="0" width="0.8" height="9" />
          <rect x="22.4" y="0" width="1.6" height="9" />
          <rect x="25" y="0" width="1" height="9" />
        </g>

        <!-- Carrier Info Lines (Right Cell) -->
        <rect x="39" y="18" width="15" height="1.5" fill="#1E293B" />
        <rect x="39" y="22" width="19" height="1.3" fill="#64748B" />
        <rect x="39" y="25" width="17" height="1.3" fill="#64748B" />

        <!-- PO / WMIT Middle Row -->
        <rect x="6" y="36" width="28" height="2" fill="#1E293B" />
        <rect x="6" y="40.5" width="32" height="2" fill="#1E293B" />
        <rect x="46" y="38" width="12" height="3" fill="#1E293B" />

        <!-- Large Bold Tracking Number Row ("1487333") -->
        <text x="8" y="56" fill="#0F172A" font-family="'Outfit', sans-serif" font-size="8.5" font-weight="800" letter-spacing="0.3">1487333</text>
        <rect x="45" y="49" width="15" height="1.3" fill="#64748B" />
        <rect x="46" y="52" width="13" height="1.3" fill="#64748B" />
        <rect x="45" y="55" width="15" height="1.3" fill="#64748B" />

        <!-- Bottom Main GS1 Barcode -->
        <rect x="18" y="62" width="30" height="1.4" fill="#334155" />
        <g transform="translate(8, 65)" fill="#0F172A">
          <rect x="0" y="0" width="1.5" height="11" />
          <rect x="2.5" y="0" width="0.8" height="11" />
          <rect x="4.5" y="0" width="2" height="11" />
          <rect x="7.8" y="0" width="1" height="11" />
          <rect x="10" y="0" width="1.5" height="11" />
          <rect x="12.8" y="0" width="0.8" height="11" />
          <rect x="14.8" y="0" width="2.2" height="11" />
          <rect x="18.2" y="0" width="1" height="11" />
          <rect x="20.4" y="0" width="1.6" height="11" />
          <rect x="23.2" y="0" width="0.9" height="11" />
          <rect x="25.2" y="0" width="2" height="11" />
          <rect x="28.4" y="0" width="1.2" height="11" />
          <rect x="30.8" y="0" width="0.8" height="11" />
          <rect x="32.8" y="0" width="1.8" height="11" />
          <rect x="35.8" y="0" width="1" height="11" />
          <rect x="38" y="0" width="2.2" height="11" />
          <rect x="41.4" y="0" width="0.9" height="11" />
          <rect x="43.5" y="0" width="1.5" height="11" />
          <rect x="46.2" y="0" width="1.2" height="11" />
          <rect x="48.5" y="0" width="1.5" height="11" />
        </g>

        <!-- Bottom Dark Label Tab -->
        <rect x="23" y="77.5" width="20" height="2.6" rx="0.5" fill="#1E293B" />
      </g>
    </g>
  </g>`;
}
