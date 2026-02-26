import { useState, useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { IconUsersGroup, IconUserPlus } from '@tabler/icons-react'
import type { PeopleTabKey } from '@/data/types'
import { mockPeople } from '@/data/mockPeople'
import { PeopleFilters } from '@/components/people/PeopleFilters'
import { PeopleTable } from '@/components/people/PeopleTable'
import { ActionMenu } from '@/components/people/ActionMenu'
import { carbonColors } from '@/theme/tokens'

export function PessoasPage() {
  const [activeTab, setActiveTab] = useState<PeopleTabKey>('all')
  const [searchValue, setSearchValue] = useState('')
  const [showTerminated, setShowTerminated] = useState(false)

  // ─── Contagens por aba ─────────────────────────────────────────
  const counts = useMemo(() => {
    const active = mockPeople.filter((p) => p.status !== 'terminated' && p.status !== 'cancelled')
    const base = showTerminated ? mockPeople : active

    return {
      all: base.length,
      'br:clt': base.filter((p) => p.contractType === 'br:clt' && p.workerCategory !== 'clt:autonomo').length,
      'br:pj': base.filter((p) => p.contractType === 'br:pj').length,
      'br:clt|clt:autonomo': base.filter((p) => p.workerCategory === 'clt:autonomo').length,
      terceirizado: base.filter((p) => p.contractType === 'terceirizado').length,
    } satisfies Record<PeopleTabKey, number>
  }, [showTerminated])

  // ─── Filtros ───────────────────────────────────────────────────
  const filteredRows = useMemo(() => {
    let rows = mockPeople

    // Toggle desligados/inativos
    if (!showTerminated) {
      rows = rows.filter((p) => p.status !== 'terminated' && p.status !== 'cancelled')
    }

    // Filtro de aba
    if (activeTab === 'br:clt') {
      rows = rows.filter((p) => p.contractType === 'br:clt' && p.workerCategory !== 'clt:autonomo')
    } else if (activeTab === 'br:pj') {
      rows = rows.filter((p) => p.contractType === 'br:pj')
    } else if (activeTab === 'br:clt|clt:autonomo') {
      rows = rows.filter((p) => p.workerCategory === 'clt:autonomo')
    } else if (activeTab === 'terceirizado') {
      rows = rows.filter((p) => p.contractType === 'terceirizado')
    }

    // Busca por texto (nome, cargo, departamento, email)
    if (searchValue.trim()) {
      const query = searchValue.toLowerCase()
      rows = rows.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.email.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query) ||
          (p.departmentName?.toLowerCase().includes(query) ?? false),
      )
    }

    return rows
  }, [activeTab, searchValue, showTerminated])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* ─── Page Header ────────────────────────────────────────── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 6,
          py: 4,
          borderBottom: `1px solid ${carbonColors.ui03}`,
          backgroundColor: 'background.default',
          height: 64,
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconUsersGroup size={20} color={carbonColors.text02} />
          <Typography variant="h4" sx={{ fontWeight: 400, color: carbonColors.text01 }}>
            Pessoas
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ActionMenu
            showTerminated={showTerminated}
            onToggleTerminated={setShowTerminated}
          />
          <Button
            variant="contained"
            size="small"
            startIcon={<IconUserPlus size={16} />}
            sx={{ minHeight: 40, paddingRight: 4 }}
          >
            Adicionar pessoa
          </Button>
        </Box>
      </Box>

      {/* ─── Filters ────────────────────────────────────────────── */}
      <PeopleFilters
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        counts={counts}
      />

      {/* ─── Table ──────────────────────────────────────────────── */}
      <PeopleTable rows={filteredRows} />
    </Box>
  )
}
