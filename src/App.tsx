import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import './App.css';
import Example from './components/Example';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  })
  

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Example />
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
