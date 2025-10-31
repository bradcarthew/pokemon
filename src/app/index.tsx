import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigator from './navigation/Navigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
}
