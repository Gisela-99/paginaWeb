import React from 'react'
import { Container, ErrorCode, Message, Description, Image, StyledLink } from './Error404.styles'

function Error404() {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>Página no encontrada</Message>
      <Description>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </Description>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error 404"
      />
    </Container>
  )
}

export default Error404
