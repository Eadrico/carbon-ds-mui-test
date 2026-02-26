import type { Components, Theme } from '@mui/material/styles'
import { carbonColors } from './tokens'

export const carbonComponents: Components<Theme> = {
  // ─── Button ──────────────────────────────────────────────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: false,
    },
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
        fontWeight: 400,
        fontSize: '0.875rem',
        letterSpacing: '0.16px',
        minHeight: 40,
        paddingLeft: 16,
        paddingRight: 64,
        transition: 'background-color 70ms cubic-bezier(0, 0, 0.38, 0.9)',
      },
      sizeSmall: {
        minHeight: 32,
        paddingLeft: 12,
        paddingRight: 40,
        fontSize: '0.75rem',
      },
      sizeLarge: {
        minHeight: 48,
        paddingLeft: 20,
        paddingRight: 80,
      },
      contained: {
        '&:hover': {
          backgroundColor: carbonColors.interactive01Hover,
        },
      },
      outlined: {
        borderColor: carbonColors.interactive01,
        '&:hover': {
          backgroundColor: 'rgba(15, 98, 254, 0.08)',
        },
      },
    },
  },

  // ─── IconButton ────────────────────────────────────────────────────
  MuiIconButton: {
    defaultProps: { disableRipple: false },
    styleOverrides: {
      root: {
        borderRadius: 0,
        padding: 8,
        '&:hover': {
          backgroundColor: carbonColors.hoverUi,
        },
      },
    },
  },

  // ─── TextField / Input ─────────────────────────────────────────────
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backgroundColor: carbonColors.ui01,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: carbonColors.ui04,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: carbonColors.text01,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: carbonColors.focus,
          borderWidth: 2,
        },
      },
      input: {
        padding: '10px 16px',
        height: '20px',
        fontSize: '0.875rem',
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: carbonColors.text02,
        letterSpacing: '0.32px',
        transform: 'translate(16px, -20px) scale(1)',
        '&.Mui-focused': {
          color: carbonColors.text02,
        },
      },
      shrink: {
        transform: 'translate(0, -20px) scale(1)',
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },

  // ─── Chip ──────────────────────────────────────────────────────────
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        height: 24,
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: '0.32px',
      },
      sizeSmall: {
        height: 20,
        fontSize: '0.75rem',
      },
    },
  },

  // ─── Tabs ──────────────────────────────────────────────────────────
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '0.16px',
        minHeight: 48,
        padding: '0 16px',
        color: carbonColors.text02,
        '&.Mui-selected': {
          color: carbonColors.text01,
          fontWeight: 600,
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 48,
        borderBottom: `1px solid ${carbonColors.ui03}`,
      },
      indicator: {
        height: 2,
        backgroundColor: carbonColors.interactive01,
      },
    },
  },

  // ─── List / Sidebar Nav ────────────────────────────────────────────
  MuiListItemButton: {
    styleOverrides: {
      root: {
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 0,
        color: carbonColors.navText,
        transition: 'background-color 70ms cubic-bezier(0, 0, 0.38, 0.9)',
        '&:hover': {
          backgroundColor: carbonColors.navHover,
        },
        '&.Mui-selected': {
          backgroundColor: carbonColors.navActive,
          color: carbonColors.navActiveText,
          '&:hover': {
            backgroundColor: carbonColors.interactive01Hover,
          },
          '& .MuiListItemIcon-root': {
            color: carbonColors.navActiveText,
          },
          '& .MuiListItemText-primary': {
            fontWeight: 600,
          },
        },
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
        color: carbonColors.navIcon,
      },
    },
  },

  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: '0.875rem',
        letterSpacing: '0.16px',
      },
    },
  },

  // ─── Drawer ────────────────────────────────────────────────────────
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: carbonColors.navBackground,
        border: 'none',
        width: 256,
      },
    },
  },

  // ─── Table ─────────────────────────────────────────────────────────
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        borderBottom: `1px solid ${carbonColors.ui03}`,
        padding: '0 16px',
        height: 48,
      },
      head: {
        backgroundColor: carbonColors.ui01,
        color: carbonColors.text02,
        fontWeight: 600,
        fontSize: '0.75rem',
        letterSpacing: '0.32px',
        textTransform: 'uppercase',
      },
    },
  },

  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: carbonColors.hoverRow,
        },
        '&.Mui-selected': {
          backgroundColor: carbonColors.selectedUi,
          '&:hover': {
            backgroundColor: carbonColors.activeUi,
          },
        },
      },
    },
  },

  // ─── Paper ─────────────────────────────────────────────────────────
  MuiPaper: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
      outlined: {
        border: `1px solid ${carbonColors.ui03}`,
      },
    },
  },

  // ─── Divider ───────────────────────────────────────────────────────
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: carbonColors.ui03,
      },
    },
  },

  // ─── Menu ──────────────────────────────────────────────────────────
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
        border: `1px solid ${carbonColors.ui03}`,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        minHeight: 40,
        '&:hover': {
          backgroundColor: carbonColors.hoverUi,
        },
        '&.Mui-selected': {
          backgroundColor: carbonColors.selectedUi,
        },
      },
    },
  },

  // ─── CssBaseline ───────────────────────────────────────────────────
  MuiCssBaseline: {
    styleOverrides: {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      body: {
        backgroundColor: carbonColors.uiBackground,
        color: carbonColors.text01,
      },
    },
  },
}
