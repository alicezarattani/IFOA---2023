import Titles from "../atoms/Titles";
import DropdownGeneri from "../atoms/DropdownGeneri";
import FilmGallery from "../molecules/FilmGallery";
import Container from "react-bootstrap/esm/Container";

function Main() {
  return (
    <>
      <div className="d-flex">
        <Titles titles="TV Shows" />
        <DropdownGeneri />
      </div>
      <FilmGallery />
    </>
  );
}

export default Main;
