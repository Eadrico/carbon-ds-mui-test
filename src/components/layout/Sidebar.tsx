import { Drawer, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material'
import {
  IconLayoutDashboard,
  IconUsersGroup,
  IconCoin,
  IconSettings,
  IconBuildingSkyscraper,
} from '@tabler/icons-react'
import { carbonColors } from '@/theme/tokens'

interface NavItem {
  label: string
  icon: React.ReactNode
  path: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <IconLayoutDashboard size={20} />, path: '/' },
  { label: 'Pessoas', icon: <IconUsersGroup size={20} />, path: '/people/admin' },
  { label: 'Folha', icon: <IconCoin size={20} />, path: '/payroll' },
  { label: 'Empresa', icon: <IconBuildingSkyscraper size={20} />, path: '/company' },
  { label: 'Configurações', icon: <IconSettings size={20} />, path: '/settings' },
]

interface SidebarProps {
  activePath?: string
}

export function Sidebar({ activePath = '/people/admin' }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 256,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 256,
          backgroundColor: carbonColors.navBackground,
          borderRight: 'none',
        },
      }}
    >
      {/* ─── Logo / Brand ─────────────────────────────────────────── */}
      <Box
        sx={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          px: 4,
          borderBottom: `1px solid rgba(255,255,255,0.08)`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.16px',
          }}
        >
          tako
        </Typography>
      </Box>

      {/* ─── Navigation ───────────────────────────────────────────── */}
      <List disablePadding sx={{ mt: 1 }}>
        {navItems.map((item) => {
          const isActive = activePath === item.path
          return (
            <ListItemButton
              key={item.path}
              selected={isActive}
              sx={{
                px: 4,
                py: 0,
                height: 48,
                // Override selected style inline for nav context
                '&.Mui-selected': {
                  backgroundColor: carbonColors.navActive,
                  borderLeft: '3px solid #ffffff',
                  paddingLeft: '13px', // compensate border
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: isActive ? '#ffffff' : carbonColors.navIcon,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#ffffff' : carbonColors.navText,
                  letterSpacing: '0.16px',
                }}
              />
            </ListItemButton>
          )
        })}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mt: 'auto' }} />

      {/* ─── User info (bottom) ───────────────────────────────────── */}
      <Box
        sx={{
          px: 4,
          py: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            backgroundColor: carbonColors.navActive,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography sx={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>
            EC
          </Typography>
        </Box>
        <Box sx={{ overflow: 'hidden' }}>
          <Typography
            sx={{
              color: carbonColors.navText,
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Eric Cali
          </Typography>
          <Typography
            sx={{
              color: carbonColors.navIcon,
              fontSize: '0.75rem',
              lineHeight: 1.2,
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}
