import Row from "react-bootstrap/esm/Row";
import Titles from "../atoms/Titles";
import SingleFilm from "../atoms/SingleFilm";

function FilmGallery() {
  return (
    <>
      <Row className="d-flex nowrap">
        <Titles titles="Harry Potter" />
        <SingleFilm url="https://www.omdbapi.com/?apikey=2c8b63f&s=harry%20potter" />
        <Titles titles="Doctor Who" />
        <SingleFilm url="https://www.omdbapi.com/?apikey=2c8b63f&s=doctor%20who" />
      </Row>
    </>
  );
}

export default FilmGallery;
