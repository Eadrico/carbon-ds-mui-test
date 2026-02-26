import { Box, Tabs, Tab, TextField, InputAdornment, Button } from '@mui/material'
import { IconSearch, IconAdjustmentsHorizontal } from '@tabler/icons-react'
import type { PeopleTabKey } from '@/data/types'
import { PEOPLE_GROUPS } from '@/data/types'
import { carbonColors } from '@/theme/tokens'

interface PeopleFiltersProps {
  activeTab: PeopleTabKey
  onTabChange: (tab: PeopleTabKey) => void
  searchValue: string
  onSearchChange: (value: string) => void
  counts?: Partial<Record<PeopleTabKey, number>>
}

export function PeopleFilters({
  activeTab,
  onTabChange,
  searchValue,
  onSearchChange,
  counts = {},
}: PeopleFiltersProps) {
  return (
    <Box>
      {/* ─── Tabs ─────────────────────────────────────────────────── */}
      <Tabs
        value={activeTab}
        onChange={(_, value: PeopleTabKey) => onTabChange(value)}
        sx={{
          px: 6,
          '& .MuiTabs-root': { minHeight: 48 },
        }}
      >
        {PEOPLE_GROUPS.map((group) => {
          const count = counts[group.key]
          const label = count !== undefined ? `${group.label} (${count})` : group.label
          return (
            <Tab
              key={group.key}
              value={group.key}
              label={label}
              disableRipple
            />
          )
        })}
      </Tabs>

      {/* ─── Search + Filter Bar ───────────────────────────────────── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 6,
          py: 4,
          borderBottom: `1px solid ${carbonColors.ui03}`,
          backgroundColor: 'background.default',
        }}
      >
        <TextField
          placeholder="Procurar"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          size="small"
          sx={{
            width: 320,
            '& .MuiOutlinedInput-root': {
              backgroundColor: carbonColors.ui01,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: carbonColors.text03 }}>
                <IconSearch size={16} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          size="small"
          startIcon={<IconAdjustmentsHorizontal size={16} />}
          sx={{
            borderColor: carbonColors.ui04,
            color: carbonColors.text01,
            height: 40,
            '&:hover': {
              borderColor: carbonColors.text01,
              backgroundColor: carbonColors.hoverUi,
            },
          }}
        >
          Filtros
        </Button>
      </Box>
    </Box>
  )
}
