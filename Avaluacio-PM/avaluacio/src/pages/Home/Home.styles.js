import { Link } from "react-router-dom";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  padding: 3rem 2rem;
  background-color: #f4f4f4;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /*  tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* móviles */
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  color: #222;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: brightness(95%);
  }

  p {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    font-family: 'Merriweather', serif;
  }
`;


export const FavoritosContainer = styled.div`
  padding: 1rem;
  background-color: rgba(255,255,255,0.95);
  border-top: 2px solid #444;
  border-radius: 8px;
`

export const FavoritosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`

export const FavoritoImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: border 0.2s, transform 0.2s;

  &:hover {
    border: 2px solid crimson;
    transform: scale(1.05);
  }
`