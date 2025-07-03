import React, { useEffect, useState } from 'react';
import sinPortada from '../../img/sinportada.jpg'
import {
  Grid,
  Card,
  FavoritosContainer,
  FavoritosGrid,
  FavoritoImg
} from './Home.style';



function Home() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [houseFilter, setHouseFilter] = useState('');

  useEffect(() => {

    const Api='https://hp-api.onrender.com/api/characters'
    fetch(Api)
      .then(res => {
        if(res.ok){
          return res.json()
        } else{
          throw new Error ('algo ha salido mal')
        }
      })  
      .then(data => {
        console.log(data)
        setCharacters(data)
      })
      .catch(err => console.error(err));
  }, []);

  const toggleFavorite = (character) => {
    const isFav = favorites.find(fav => fav.name === character.name);
    if (isFav) {
      setFavorites(favorites.filter(fav => fav.name !== character.name));
    } else {
      setFavorites([...favorites, character]);
    }
  };


  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  return (
    <div style={{ padding: "2rem" }}>
    {/* Selector para filtrar por casa */}
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <select value={houseFilter} onChange={(e) => setHouseFilter(e.target.value)}>
        <option value="">Todas las casas</option>
        {houses.map(h => <option key={h} value={h}>{h}</option>)}
      </select>
    </div>

    {/* Personajes destacados */}
    {favorites.length > 0 && (
      <FavoritosContainer>
        <h2 style={{ textAlign: "center" }}>Personajes Destacados</h2>
        <FavoritosGrid>
          {favorites.map((fav, index) => (
            <FavoritoImg
              key={`${fav.name}-${index}`}
              src={fav.image || sinPortada}
              alt={fav.name}
              onClick={() => toggleFavorite(fav)}
              title="Eliminar de destacados"
            />
          ))}
        </FavoritosGrid>
      </FavoritosContainer>
    )}

    {/* Agrupar personajes por casa */}
    {houses.map(house => {
      const chars = characters.filter(c =>
        c.house === house && (houseFilter === '' || houseFilter === house)
      );
      if (chars.length === 0) return null; 

      return (
        <div key={house} style={{ marginBottom: '2rem' }}>
          <h2>{house}</h2>
          <Grid>
            {chars.map((character, index) => (
              <Card as="div" key={`${character.name}-${index}`}>
                <img src={character.image || sinPortada} alt={character.name} />
                <p>{character.name}</p>
                <p>{character.house || "Sin casa"}</p>
                <button onClick={() => toggleFavorite(character)}>
                  {favorites.find(f => f.name === character.name) ? "Quitar de destacados" : "Destacar"}
                </button>
              </Card>
            ))}
          </Grid>
        </div>
      );
    })}
  </div>
  );
}

export default Home;
