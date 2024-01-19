import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";

function SingleFilm({ url }) {
  const [filmData, setFilmData] = useState([]);

  // Aggiungo l'effetto per effettuare la chiamata fetch quando il componente è montato
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
      {filmData.slice(0, 9).map((filmData) => (
        <Col xl={1} className="mx-3 mb-3" key={filmData.imdbID}>
          <img
            src={filmData.Poster}
            alt={filmData.Title}
            className="gallery"
            width={150}
            style={{ height: "200px", margin: "10px" }}
          />
        </Col>
      ))}
    </>
  );
}

export default SingleFilm;
