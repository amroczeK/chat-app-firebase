import { AuthProvider } from './contexts/Auth';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';
import styled from 'styled-components';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <AuthProvider>
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header>
            <h1>chat app</h1>
          </Header>
          <Landing/>
        </ThemeProvider>
      </Container>
    </AuthProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: #282c34;
  text-align: center;
  max-width: 728px;
  margin: 0 auto;
`;