import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pokedex from './screens/Pokedex';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pokedex />
    </QueryClientProvider>
  );
}
