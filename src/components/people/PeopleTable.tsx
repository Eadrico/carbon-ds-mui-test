import { Avatar, Box, Typography, Stack } from '@mui/material'
import { DataGrid, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid'
import type { Person } from '@/data/types'
import { SituacaoChip } from './SituacaoChip'
import { ModalidadeChip } from './ModalidadeChip'
import { carbonColors } from '@/theme/tokens'

// ─── Helpers ───────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function getAvatarColor(name: string): string {
  const colors = [
    '#0043ce', '#198038', '#8a3ffc',
    '#ba4e00', '#005d5d', '#a2191f',
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

// ─── Column Definitions ────────────────────────────────────────────
const columns: GridColDef<Person>[] = [
  {
    field: 'name',
    headerName: 'Nome',
    width: 300,
    renderCell: (params: GridRenderCellParams<Person>) => {
      const { name, email } = params.row
      return (
        <Stack direction="row" alignItems="center" spacing={3} sx={{ height: '100%', py: 2 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: '0.75rem',
              fontWeight: 600,
              backgroundColor: getAvatarColor(name),
              flexShrink: 0,
            }}
          >
            {getInitials(name)}
          </Avatar>
          <Box sx={{ overflow: 'hidden' }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 400, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: carbonColors.text02, lineHeight: 1.3, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {email}
            </Typography>
          </Box>
        </Stack>
      )
    },
  },
  {
    field: 'title',
    headerName: 'Cargo',
    width: 200,
    renderCell: (params) => (
      <Typography variant="body1" sx={{ color: carbonColors.text01 }}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'departmentName',
    headerName: 'Departamento',
    width: 180,
    renderCell: (params) => (
      <Typography variant="body1" sx={{ color: carbonColors.text01 }}>
        {params.value ?? '—'}
      </Typography>
    ),
  },
  {
    field: 'companyName',
    headerName: 'Empresa',
    width: 160,
    renderCell: (params) => (
      <Typography variant="body1" sx={{ color: carbonColors.text02 }}>
        {params.value ?? '—'}
      </Typography>
    ),
  },
  {
    field: 'admissionDate',
    headerName: 'Admissão / Início',
    width: 140,
    renderCell: (params) => (
      <Typography variant="body1" sx={{ color: carbonColors.text01 }}>
        {formatDate(params.value as string)}
      </Typography>
    ),
  },
  {
    field: 'workerCategory',
    headerName: 'Modalidade',
    width: 180,
    renderCell: (params) => <ModalidadeChip workerCategory={params.value} />,
  },
  {
    field: 'status',
    headerName: 'Situação',
    width: 140,
    renderCell: (params) => <SituacaoChip status={params.value} />,
  },
]

// ─── Component ─────────────────────────────────────────────────────
interface PeopleTableProps {
  rows: Person[]
  loading?: boolean
}

export function PeopleTable({ rows, loading = false }: PeopleTableProps) {
  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        '& .MuiDataGrid-root': {
          border: 'none',
          borderRadius: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: carbonColors.ui01,
          borderBottom: `1px solid ${carbonColors.ui03}`,
          minHeight: '48px !important',
          maxHeight: '48px !important',
        },
        '& .MuiDataGrid-columnHeader': {
          height: '48px !important',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontSize: '0.75rem',
          fontWeight: 600,
          color: carbonColors.text02,
          letterSpacing: '0.32px',
          textTransform: 'uppercase',
        },
        '& .MuiDataGrid-row': {
          minHeight: '48px !important',
          maxHeight: 'none !important',
          borderBottom: `1px solid ${carbonColors.ui03}`,
          '&:hover': {
            backgroundColor: carbonColors.hoverRow,
            cursor: 'pointer',
          },
        },
        '& .MuiDataGrid-cell': {
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: `1px solid ${carbonColors.ui03}`,
          backgroundColor: carbonColors.ui01,
          minHeight: 48,
        },
        '& .MuiDataGrid-selectedRowCount': {
          display: 'none',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.contractId}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
        pageSize={25}
        rowsPerPageOptions={[25, 50, 100]}
        getRowHeight={() => 'auto'}
        sx={{ border: 0 }}
        localeText={{
          // PT-BR localization
          MuiTablePagination: {
            labelRowsPerPage: 'Linhas por página:',
            labelDisplayedRows: ({ from, to, count }) =>
              `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,
          },
          columnHeaderSortIconLabel: 'Ordenar',
          footerRowSelected: (count) =>
            count !== 1
              ? `${count.toLocaleString()} linhas selecionadas`
              : `${count.toLocaleString()} linha selecionada`,
          noRowsLabel: 'Nenhuma pessoa encontrada',
          noResultsOverlayLabel: 'Nenhum resultado encontrado.',
        }}
      />
    </Box>
  )
}
