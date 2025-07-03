import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  padding: 3rem 2rem; 
  background-color: #1e1e2f;
  color: #f0e6d2;
  font-family: 'Georgia', serif;
  max-width: 700px; 
  margin: 0 auto; 
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7); 
  line-height: 1.7;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #a8865d;
  text-align: center;
  font-family: 'Cinzel', serif;
`

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #d4b483;
`

const Text = styled.p`
  font-size: 1.15rem;
  margin-bottom: 1.3rem;
`

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.8rem;
  list-style-type: square;
  color: #d4b483;
`

const ListItem = styled.li`
  margin-bottom: 0.7rem;
`

const Link = styled.a`
  color: #e0c097;
  text-decoration: underline;
  &:hover {
    color: #f7d47d;
  }
`

function About() {
  return (
    <AboutContainer>
      <Title>Harry Potter API</Title>
      <Text>
        Bienvenido a la API de Harry Potter, un recurso dedicado a proporcionar datos completos y detallados del
        universo mágico creado por J.K. Rowling. Desde personajes hasta hechizos, casas y criaturas mágicas,
        esta API está diseñada para fans, desarrolladores y curiosos que quieran explorar el mundo de Hogwarts.
      </Text>

      <Subtitle>¿Qué puedes encontrar?</Subtitle>
      <List>
        <ListItem>Información detallada de personajes como Harry, Hermione, Ron y muchos más.</ListItem>
        <ListItem>Datos sobre las cuatro casas de Hogwarts: Gryffindor, Slytherin, Hufflepuff y Ravenclaw.</ListItem>
        <ListItem>Listado de hechizos y su descripción.</ListItem>
        <ListItem>Descripción de criaturas mágicas y objetos icónicos.</ListItem>
      </List>

      <Subtitle>Uso de la API</Subtitle>
      <Text>
        Puedes integrar esta API en tus aplicaciones para mostrar datos mágicos en tiempo real. Está diseñada para
        ser fácil de usar con endpoints RESTful y respuestas en formato JSON.
      </Text>

      <Subtitle>Contacto y Soporte</Subtitle>
      <Text>
        Para dudas, sugerencias o reportar errores, contáctanos en{' '}
        <Link href="mailto:soporte@harrypotterapi.com">soporte@harrypotterapi.com</Link>.
      </Text>
    </AboutContainer>
  )
}

export default About
