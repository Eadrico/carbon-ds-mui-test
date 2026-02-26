import type { TypographyOptions } from '@mui/material/styles/createTypography'

// Carbon Design System v11 — Type Scale (Productive)
// Font: IBM Plex Sans
export const carbonTypography: TypographyOptions = {
  fontFamily: [
    'IBM Plex Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(','),

  // body-01 — 14px / 20px / regular — Default body, data tables
  body1: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.25rem',  // 20px
    fontWeight: 400,
    letterSpacing: '0.16px',
  },

  // body-02 — 16px / 24px / regular — Long-form copy, paragraphs
  body2: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.5rem',   // 24px
    fontWeight: 400,
    letterSpacing: '0px',
  },

  // heading-01 — 14px / 18px / semibold — Labels, compact headings
  h6: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.125rem', // 18px
    fontWeight: 600,
    letterSpacing: '0.16px',
  },

  // heading-02 — 16px / 22px / semibold — Section headings
  h5: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.375rem', // 22px
    fontWeight: 600,
    letterSpacing: '0px',
  },

  // heading-03 — 20px / 28px / regular — Page / modal headings
  h4: {
    fontSize: '1.25rem',    // 20px
    lineHeight: '1.75rem',  // 28px
    fontWeight: 400,
    letterSpacing: '0px',
  },

  // heading-04 — 28px / 36px / regular — Hero / display
  h3: {
    fontSize: '1.75rem',    // 28px
    lineHeight: '2.25rem',  // 36px
    fontWeight: 400,
    letterSpacing: '0px',
  },

  // label-01 — 12px / 16px / regular — Labels, captions
  caption: {
    fontSize: '0.75rem',    // 12px
    lineHeight: '1rem',     // 16px
    fontWeight: 400,
    letterSpacing: '0.32px',
  },

  // Helper — overline repurposed as helper-01
  overline: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 400,
    letterSpacing: '0.32px',
    textTransform: 'none',
  },

  button: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.125rem',
    letterSpacing: '0.16px',
    textTransform: 'none',
  },
}
