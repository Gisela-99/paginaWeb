import styled from 'styled-components';
export const Titulo = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a;
  margin: 3rem 0 1rem 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: crimson;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`;

export const Main = styled.main`
  padding: 0;
  //max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;