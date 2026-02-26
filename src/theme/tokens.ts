// Carbon Design System v11 — White Theme color tokens
// Reference: https://carbondesignsystem.com/elements/color/tokens/

export const carbonColors = {
  // ─── Interactive ───────────────────────────────────────────────────
  interactive01: '#0f62fe',    // Primary button, link, focus indicator
  interactive01Hover: '#0043ce',
  interactive02: '#393939',    // Secondary button
  interactive02Hover: '#4c4c4c',
  interactive03: '#0f62fe',    // Tertiary button
  interactive04: '#0f62fe',    // Selected, active elements
  focus: '#0f62fe',

  // ─── UI ────────────────────────────────────────────────────────────
  uiBackground: '#ffffff',
  ui01: '#f4f4f4',             // Layer / raised card bg
  ui02: '#ffffff',             // Layer 02
  ui03: '#e0e0e0',             // Border subtle (divider)
  ui04: '#8d8d8d',             // Border medium
  ui05: '#161616',             // Border strong / icon

  // ─── Text ──────────────────────────────────────────────────────────
  text01: '#161616',           // Primary text
  text02: '#525252',           // Secondary text
  text03: '#a8a8a8',           // Placeholder, helper text
  text04: '#ffffff',           // Text on interactive (inverted)
  text05: '#6f6f6f',           // Tertiary text

  // ─── Link ──────────────────────────────────────────────────────────
  link01: '#0f62fe',
  link01Hover: '#0043ce',

  // ─── Support ───────────────────────────────────────────────────────
  support01: '#da1e28',        // Error / danger
  support01Light: '#fff1f1',
  support02: '#198038',        // Success
  support02Light: '#defbe6',
  support03: '#f1c21b',        // Warning
  support03Light: '#fdf6da',
  support04: '#0043ce',        // Info / informational
  support04Light: '#edf5ff',

  // ─── Hover / Active states ─────────────────────────────────────────
  hoverUi: '#e8e8e8',          // Row hover, list item hover (on white)
  hoverRow: '#e8e8e8',
  activeUi: '#c6c6c6',
  selectedUi: '#e0e0e0',

  // ─── Navigation (dark shell) ───────────────────────────────────────
  navBackground: '#161616',    // Shell / sidebar background (Gray 100)
  navText: '#f4f4f4',
  navHover: 'rgba(255, 255, 255, 0.08)',
  navActive: '#0f62fe',
  navActiveText: '#ffffff',
  navIcon: '#8d8d8d',
} as const

// Spacing scale — Carbon uses 4px base unit
export const carbonSpacing = {
  s01: '2px',
  s02: '4px',
  s03: '8px',
  s04: '12px',
  s05: '16px',
  s06: '24px',
  s07: '32px',
  s08: '40px',
  s09: '48px',
  s10: '64px',
  s11: '80px',
  s12: '96px',
  s13: '160px',
} as const
