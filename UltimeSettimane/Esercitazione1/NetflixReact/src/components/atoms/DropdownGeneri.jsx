import Dropdown from "react-bootstrap/Dropdown";

function DropdownGeneri() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="transparent"
        className="text-light border"
        id="dropdown-basic"
      >
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownGeneri;
