// Tipos espelhando os reais do monorepo
// Ref: packages/ui/auditing/src/app/people/types.ts

export type ContractStatus =
  | 'active'
  | 'onAdmission'
  | 'onLeave'
  | 'terminated'
  | 'cancelled'

export type ContractType = 'br:clt' | 'br:pj' | 'terceirizado'

export type WorkerCategory =
  | 'clt:geral'
  | 'clt:autonomo'
  | 'clt:tsv'
  | 'clt:estagiario'
  | 'clt:jovemAprendiz'
  | 'pj'
  | 'terc:internacional'
  | 'terc:br'

export interface Person {
  contractId: string
  personId: string
  name: string
  email: string
  pictureUrl?: string
  title: string          // cargo / job title
  departmentId?: string
  departmentName?: string
  companyName?: string
  admissionDate: string  // ISO date string
  contractType: ContractType
  workerCategory?: WorkerCategory
  status: ContractStatus
}

// ─── Labels de exibição ────────────────────────────────────────────
export const CONTRACT_STATUS_LABELS: Record<ContractStatus, string> = {
  active: 'Ativo(a)',
  onAdmission: 'Em admissão',
  onLeave: 'Afastado(a)',
  terminated: 'Desligado(a)',
  cancelled: 'Cancelado',
}

export const WORKER_CATEGORY_LABELS: Record<WorkerCategory, string> = {
  'clt:geral': 'Colaborador',
  'clt:autonomo': 'Autônomo',
  'clt:tsv': 'Pró-Labore',
  'clt:estagiario': 'Estagiário',
  'clt:jovemAprendiz': 'Aprendiz',
  pj: 'Prestador de serviço',
  'terc:internacional': 'Terceirizado Internacional',
  'terc:br': 'Terceirizado Nacional',
}

export const CONTRACT_TYPE_LABELS: Record<ContractType, string> = {
  'br:clt': 'CLT',
  'br:pj': 'PJ',
  terceirizado: 'Terceirizado',
}

// ─── Configuração dos grupos/tabs ──────────────────────────────────
export type PeopleTabKey = 'all' | 'br:clt' | 'br:pj' | 'br:clt|clt:autonomo' | 'terceirizado'

export interface PeopleGroup {
  key: PeopleTabKey
  label: string
}

export const PEOPLE_GROUPS: PeopleGroup[] = [
  { key: 'all', label: 'Todos' },
  { key: 'br:clt', label: 'Colaboradores' },
  { key: 'br:pj', label: 'Prestadores de serviço' },
  { key: 'br:clt|clt:autonomo', label: 'Autônomos' },
  { key: 'terceirizado', label: 'Terceirizado' },
]
