import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DancesList } from './dances/DancesList'
import './App.scss'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <DancesList />
  </QueryClientProvider>
)
