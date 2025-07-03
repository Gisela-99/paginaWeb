import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SpellsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #222233;
  color: #f0e6d2;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
  font-family: 'Georgia', serif;
`

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #a8865d;
  text-align: center;
`

const SpellList = styled.ul`
  list-style: none;
  padding: 0;
`

const SpellItem = styled.li`
  background-color: #2a2a3e;
  margin-bottom: 1.3rem;
  padding: 1.2rem 1.5rem;
  border-radius: 10px;
  box-shadow: inset 0 0 8px #463a20;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e3e56;
  }
`

const SpellName = styled.h2`
  margin: 0 0 0.6rem 0;
  font-size: 1.5rem;
  color: #f7d47d;
`

const SpellDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #d4b483;
`

function Spells() {
  const [spells, setSpells] = useState([])

  useEffect(() => {

    const spellsData = [
      {
        name: 'Expelliarmus',
        description: 'Hechizo de desarme que obliga a soltar lo que el oponente sostiene.',
      },
      {
        name: 'Lumos',
        description: 'Hechizo para iluminar la punta de la varita, útil en la oscuridad.',
      },
      {
        name: 'Alohomora',
        description: 'Hechizo para abrir cerraduras y puertas cerradas con llave.',
      },
      {
        name: 'Expecto Patronum',
        description: 'Invoca un Patronus, un guardián protector contra dementores.',
      },
      {
        name: 'Stupefy',
        description: 'Hechizo aturdidor que incapacita temporalmente al objetivo.',
      },
    ]

    setSpells(spellsData)
  }, [])

  return (
    <SpellsContainer>
      <Title>Hechizos Mágicos</Title>
      <SpellList>
        {spells.map((spell, index) => (
          <SpellItem key={index}>
            <SpellName>{spell.name}</SpellName>
            <SpellDescription>{spell.description}</SpellDescription>
          </SpellItem>
        ))}
      </SpellList>
    </SpellsContainer>
  )
}

export default Spells
