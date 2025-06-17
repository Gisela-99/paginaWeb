import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Noticias() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const API_ID = `https://www.elmundotoday.com/wp-json/wp/v2/posts/${id}?_embed`;

    fetch(API_ID)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Algo ha ido mal');
        }
      })
      .then((data) => {
        setNoticia(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!noticia) return <p>Cargando noticia...</p>;

  return (
    <div>
      <button onClick={() => navigate('/')}>Volver</button>
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: noticia.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: noticia.content.rendered }} />
      </div>
    </div>
  );
}

export default Noticias;
