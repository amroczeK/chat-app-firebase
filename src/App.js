import { AuthProvider } from './contexts/Auth';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <h1>chat app</h1>
      </div>
    </AuthProvider>
  );
}

export default App;
