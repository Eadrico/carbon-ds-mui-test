import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { PessoasPage } from '@/pages/PessoasPage'

function App() {
  const location = useLocation()

  return (
    <AppShell activePath={location.pathname}>
      <Routes>
        <Route path="/" element={<Navigate to="/people/admin" replace />} />
        <Route path="/people/admin" element={<PessoasPage />} />
        <Route path="/people/manager" element={<PessoasPage />} />
        {/* Placeholder routes para nav visual */}
        <Route path="/payroll" element={<PlaceholderPage title="Folha" />} />
        <Route path="/company" element={<PlaceholderPage title="Empresa" />} />
        <Route path="/settings" element={<PlaceholderPage title="Configurações" />} />
      </Routes>
    </AppShell>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ padding: 32, color: '#525252', fontFamily: 'IBM Plex Sans, sans-serif' }}>
      <h2 style={{ fontWeight: 400, fontSize: 20 }}>{title}</h2>
      <p style={{ fontSize: 14 }}>Página não implementada neste teste.</p>
    </div>
  )
}

export default App
