import { useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/Auth';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';
import styled from 'styled-components';
import Header from './components/Header';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <AuthProvider>
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header>
            <h1>chat app</h1>
          </Header>
          <Section>{user ? <ChatRoom /> : <SignIn />}</Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(40, 37, 53);
`;
