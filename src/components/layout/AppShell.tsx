import { Box } from '@mui/material'
import { Sidebar } from './Sidebar'

interface AppShellProps {
  children: React.ReactNode
  activePath?: string
}

export function AppShell({ children, activePath }: AppShellProps) {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar activePath={activePath} />
      <Box
        component="main"
        sx={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
