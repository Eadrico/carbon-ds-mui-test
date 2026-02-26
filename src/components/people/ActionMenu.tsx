import { useState } from 'react'
import { IconButton, Menu, MenuItem, Switch, Typography, Box } from '@mui/material'
import { IconDotsVertical } from '@tabler/icons-react'
import { carbonColors } from '@/theme/tokens'

interface ActionMenuProps {
  showTerminated: boolean
  onToggleTerminated: (value: boolean) => void
}

export function ActionMenu({ showTerminated, onToggleTerminated }: ActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        size="small"
        aria-label="Mais opções"
        sx={{
          color: carbonColors.text02,
          '&:hover': { backgroundColor: carbonColors.hoverUi },
        }}
      >
        <IconDotsVertical size={20} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            minWidth: 260,
            borderRadius: 0,
            border: `1px solid ${carbonColors.ui03}`,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          },
        }}
      >
        <MenuItem
          disableRipple
          onClick={() => {
            onToggleTerminated(!showTerminated)
            handleClose()
          }}
          sx={{
            py: 0,
            px: 3,
            height: 48,
            '&:hover': { backgroundColor: carbonColors.hoverUi },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="body1">
              Mostrar desligados e inativos
            </Typography>
            <Switch
              checked={showTerminated}
              size="small"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                onToggleTerminated(e.target.checked)
                handleClose()
              }}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: carbonColors.interactive01,
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: carbonColors.interactive01,
                },
              }}
            />
          </Box>
        </MenuItem>
      </Menu>
    </>
  )
}
