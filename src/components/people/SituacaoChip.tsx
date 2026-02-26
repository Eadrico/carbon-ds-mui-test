import { Chip } from '@mui/material'
import type { ContractStatus } from '@/data/types'
import { CONTRACT_STATUS_LABELS } from '@/data/types'

interface StatusConfig {
  label: string
  backgroundColor: string
  color: string
}

const STATUS_CONFIG: Record<ContractStatus, StatusConfig> = {
  active: {
    label: CONTRACT_STATUS_LABELS.active,
    backgroundColor: '#defbe6',
    color: '#0e6027',
  },
  onAdmission: {
    label: CONTRACT_STATUS_LABELS.onAdmission,
    backgroundColor: '#edf5ff',
    color: '#0043ce',
  },
  onLeave: {
    label: CONTRACT_STATUS_LABELS.onLeave,
    backgroundColor: '#fff3e0',
    color: '#b45309',
  },
  terminated: {
    label: CONTRACT_STATUS_LABELS.terminated,
    backgroundColor: '#f4f4f4',
    color: '#525252',
  },
  cancelled: {
    label: CONTRACT_STATUS_LABELS.cancelled,
    backgroundColor: '#f4f4f4',
    color: '#525252',
  },
}

interface SituacaoChipProps {
  status: ContractStatus
}

export function SituacaoChip({ status }: SituacaoChipProps) {
  const config = STATUS_CONFIG[status]

  return (
    <Chip
      label={config.label}
      size="small"
      sx={{
        backgroundColor: config.backgroundColor,
        color: config.color,
        fontWeight: 400,
        fontSize: '0.75rem',
        height: 20,
        '& .MuiChip-label': {
          px: 2,
        },
      }}
    />
  )
}
