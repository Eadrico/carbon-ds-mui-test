import { Chip } from '@mui/material'
import type { WorkerCategory } from '@/data/types'
import { WORKER_CATEGORY_LABELS } from '@/data/types'

interface ModalidadeChipProps {
  workerCategory?: WorkerCategory
}

export function ModalidadeChip({ workerCategory }: ModalidadeChipProps) {
  if (!workerCategory) return null

  const label = WORKER_CATEGORY_LABELS[workerCategory]

  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      sx={{
        borderColor: '#e0e0e0',
        color: '#525252',
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
