/**
 * Infographic #1: Physical POS Setup
 */

import { THEME } from "../shared/theme.js";
import {
  renderSvgDocument,
  renderCard,
  renderConnection,
} from "../shared/primitives.js";
import {
  renderPosTablet12,
  renderCustomerDisplay8,
  renderSumUpSolo,
  renderEpsonTmM30III,
  renderBarcodeScanner,
} from "../shared/devices.js";

export function generatePhysicalSetupSvg() {
  const { colors } = THEME;

  const peripherals = [
    {
      x: 48,
      y: 36,
      title: "Kundendisplay (optional)",
      fineprint: "z.b. Samsung A11",
      illustration: renderCustomerDisplay8({ x: 96, y: 50, scale: 0.9 }),
      conn: {
        path: "M 368 166 L 429 166 L 429 236 L 490 236",
        colorKey: "primary",
        biDirectional: true,
      },
    },
    {
      x: 48,
      y: 326,
      title: "SumUp oder O.P.I.",
      fineprint: "Solo, Lite oder Lite+",
      illustration: renderSumUpSolo({ x: 74, y: 54, scale: 1.04 }),
      conn: {
        path: "M 368 456 L 429 456 L 429 356 L 490 356",
        colorKey: "primary",
        biDirectional: true,
      },
    },
    {
      x: 1032,
      y: 36,
      title: "Bondrucker + TSE",
      fineprint: "z.b. Epson tm-m30iii",
      illustration: renderEpsonTmM30III({ x: 26, y: 54, scale: 1.0, showTseCallout: true }),
      conn: {
        path: "M 910 236 L 971 236 L 971 166 L 1032 166",
        colorKey: "primary",
        biDirectional: true,
      },
    },
    {
      x: 1032,
      y: 326,
      fineprint: "z.b. Inatek BCST-60",
      illustration: renderBarcodeScanner({ x: 46, y: 38, scale: 1.02 }),
      conn: {
        path: "M 1032 456 L 971 456 L 971 356 L 910 356",
        colorKey: "primary",
        biDirectional: false,
        endArrow: true,
      },
    },
  ];

  const content = `
    <!-- Center Hub: 12" Landscape POS Tablet -->
    ${renderCard({
      x: 490,
      y: 106,
      w: 420,
      h: 380,
      fineprint: "z.b. Samsung A11+",
      accentColor: colors.primary,
      shadow: "shadow-lg",
      children: `
        ${renderPosTablet12({ x: 22, y: 52, scale: 1.25, showStand: true })}
      `,
    })}

    <!-- Peripheral Cards & Connections -->
    ${peripherals
      .map(
        (p) => `
      ${renderCard({
        x: p.x,
        y: p.y,
        w: 320,
        h: 260,
        title: p.title || "",
        fineprint: p.fineprint || "",
        accentColor: colors.primary,
        children: p.illustration,
      })}
      ${renderConnection(p.conn)}
    `
      )
      .join("")}
  `;

  return renderSvgDocument({
    width: 1400,
    height: 622,
    content,
  });
}
