import React, { useEffect, useState } from 'react';
import { Card, Grid, FavoritosContainer, FavoritosGrid, FavoritoImg } from './Home.styles';

function Home() {
  const [noticias, setNoticias] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (noticia) => {
    const yaFavorito = favoritos.find(fav => fav.id === noticia.id);
    if (yaFavorito) {
      setFavoritos(favoritos.filter(fav => fav.id !== noticia.id));
    } else {
      setFavoritos([...favoritos, noticia]);
    }
  };

  useEffect(() => {
    const API = "https://www.elmundotoday.com/wp-json/wp/v2/posts?_embed";
    fetch(API)
      .then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error('Algo no ha ido bien');
      })
      .then((data) => setNoticias(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Grid>
        {noticias.map((noticia) => {
          const featuredMedia = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          if (!featuredMedia) return null;
          return (
            <Card key={noticia.id}>
              <img
                src={featuredMedia}
                alt={noticia.title.rendered}
                onClick={() => toggleFavorito(noticia)}
                style={{ cursor: 'pointer' }}
              />
              <p dangerouslySetInnerHTML={{ __html: noticia.title.rendered }} />
            </Card>
          );
        })}
      </Grid>

      <h2 style={{ textAlign: 'center' }}>Notícias Favoritas</h2>
      <FavoritosContainer>
        <FavoritosGrid>
          {favoritos.map((fav) => {
            const img = fav._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            return (
              <FavoritoImg
                key={fav.id}
                src={img}
                alt={fav.title.rendered}
                onClick={() => toggleFavorito(fav)}
                title="Eliminar de favoritos"
              />
            );
          })}
        </FavoritosGrid>
      </FavoritosContainer>
    </div>
  );
}

export default Home;
