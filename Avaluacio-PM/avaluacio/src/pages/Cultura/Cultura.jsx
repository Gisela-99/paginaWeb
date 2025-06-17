import styled from 'styled-components'

const CulturaContainer = styled.div`
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  min-height: 80vh;
`

const Title = styled.h1`
  color: #d35400; /* naranja para destacar */
  text-align: center;
  margin-bottom: 1.5rem;
`

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
  font-size: 1.1rem;
`

function Cultura() {
  return (
    <CulturaContainer>
      <Title>Cultura</Title>
      <Text>
        Bienvenido a la sección de Cultura de «El Mundo Today». Aquí encontrarás las noticias más
        recientes y las curiosidades culturales más sorprendentes, siempre con nuestro toque satírico.
      </Text>
      <Text>
        La cultura es un reflejo de nuestra sociedad y nos permite comprender mejor el mundo que
        nos rodea, aunque en nuestro caso, siempre con una pizca de humor y sarcasmo.
      </Text>
      <Text>
        Explora nuestras noticias y descubre las historias que nadie más se atreve a contar.
      </Text>
    </CulturaContainer>
  )
}

export default Cultura
