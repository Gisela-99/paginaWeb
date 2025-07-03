import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f1624 100%);
  border-radius: 16px;
  box-shadow: 0 0 20px #7a5c1e88;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #2a2a3f, #1c1c2f);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 12px #000000bb;
  color: #f7d47d;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px #f7d47daa;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    filter: brightness(0.85);
    border-bottom: 2px solid #a8865d;
  }

  p {
    padding: 1rem;
    margin: 0;
    font-family: 'Magic', cursive, serif;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 0 0 4px #a8865d;
  }

  button {
    margin: 0 1rem 1rem 1rem;
    padding: 0.5rem;
    background-color: #a8865d;
    color: #121212;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Magic', cursive, serif;
    font-size:1.4rem;
    box-shadow: 0 0 6px #f7d47d88;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #f7d47d;
      color: #1c1c2f;
    }
  }
`;

export const FavoritosContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #1a1a2e, #0f1624);
  border-radius: 12px;
  box-shadow: 0 0 25px #7a5c1e99;
  text-align: center;

  h2 {
    font-family: 'Magic', cursive, serif;
    font-size: 5rem;
    color: #f7d47d;
    margin-bottom: 1rem;
    text-shadow: 0 0 8px #a8865d;
  }
`;

export const FavoritosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const FavoritoImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid transparent;
  cursor: pointer;
  box-shadow: 0 0 12px #a8865d88;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: #f7d47d;
    transform: scale(1.1);
  }
`;
