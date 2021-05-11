import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
}
body {
  background-color: #0B0E11;
  font-family: 'Inter', sans-serif;
}
ul, li {
  text-align: left;
  list-style: none;
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
  opacity: 0.7;
  cursor: not-allowed;
}
  
main::-webkit-scrollbar {
  width: 0.25rem;
}

main::-webkit-scrollbar-track {
  background: #49505B;
}

main::-webkit-scrollbar-thumb {
  background: #DEE3EA;
}
`;

export default GlobalStyle;
