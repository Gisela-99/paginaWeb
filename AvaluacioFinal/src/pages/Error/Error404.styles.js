import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color:#24262b ;  
  min-height: 30vh;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorCode = styled.h1`
  font-size: 6rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`

export const Message = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: white;
`

export const Description = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 2rem;
`

export const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 2rem;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
