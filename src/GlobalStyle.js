import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
}
body {
  background-color: #282c34;
  font-family: 'Inter', sans-serif;
}
ul, li {
  text-align: left;
  list-style: none;
}
p {
  max-width: 500px;
  margin-bottom: 12px;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  color: white;
  text-align: center;
}
button {
  background-color: #282c34; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
  
main::-webkit-scrollbar {
  width: 0.25rem;
}

main::-webkit-scrollbar-track {
  background: #1e1e24;
}

main::-webkit-scrollbar-thumb {
  background: #6649b8;
}
`;

export default GlobalStyle;
