import Row from "react-bootstrap/esm/Row";
import Titles from "../atoms/Titles";
import SingleFilm from "../atoms/SingleFilm";

function FilmGallery() {
  return (
    <>
      <Row>
        <Titles />
        <SingleFilm />
      </Row>
    </>
  );
}

export default FilmGallery;
