import Titles from "../atoms/Titles";
import DropdownGeneri from "../atoms/DropdownGeneri";
import FilmGallery from "../molecules/FilmGallery";

function Main() {
  return (
    <>
      <div className="d-flex">
        <Titles titles="TV Shows" />
        <DropdownGeneri />
      </div>
      <div>
        <FilmGallery />
      </div>
    </>
  );
}

export default Main;
