import { useState, useEffect } from "react";

function SingleFilm() {
  const [filmData, setFilmData] = useState([]);

  // Aggiungo l'effetto per effettuare la chiamata fetch quando il componente è montato
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=2c8b63f&s=harry%20potter"
        );
        const data = await response.json();
        setFilmData(data.Search);
      } catch (error) {
        console.error("Errore di chiamata", error);
      }
    };
    fetchData();
  }, []); // L'array vuoto come secondo argomento indica che l'effetto viene eseguito solo al montaggio

  return (
    <>
      {filmData.map((filmData) => (
        <img key={filmData.imdbID} src={filmData.Poster} alt={filmData.Title} />
      ))}
    </>
  );
}

export default SingleFilm;
