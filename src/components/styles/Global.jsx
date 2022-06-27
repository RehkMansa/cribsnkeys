import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
    --fs-default: 1.8rem;
    --fw-regular: 400;
    --fw-header: 500;
    --fw-bold: 600;
    --lh-regular: 1;
    --ff-body: 'Karla', sans-serif;
    --ff-header: 'Playfair Display', sans-serif;
    --gold: #f2b636;
    --blue: #070c1f;
    --grey: #878c9b;
    --white: #fff;
    overflow-x: hidden;
  }
  body {
    font-family: 'Karla', sans-serif;
    font-size: var(--fs-default);
    line-height: var(--lh-regular);
    font-weight: var(--fw-regular);
    color: var(--grey);
    min-height: 100vh;
    position: relative;
    background-color: var(--blue);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1{
    font-weight: var(--fw-bold);
  }
  h1,h2,h3,h4,h5,h6{
    color: var(--gold);
    font-family: var(--ff-header);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  button {
    padding: 9px 25px;
    font-size: var(--ff-body);
    font-family: inherit;
    font-weight: 500;
    background-color: var(--gold);
    color: var(--white);
    border: none;
    outline: none;
    border-radius: 5px;
    text-transform: capitalize;
  }
  input{
    padding: 9px 25px;
    font-size: var(--ff-body);
    font-family: inherit;
    font-weight: 400;
    outline:none;
    border: 1px solid var(--gray4)
  }
  input::placeholder{
    text-transform: uppercase
  }
  button:hover,
  a:hover {
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
export default GlobalStyles;
