import Dropdown from "react-bootstrap/Dropdown";
import AvatarImg from "./AvatarImg";

function DropdownButtonCustom() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="transparent"
        className="text-light"
        id="dropdown-basic"
      >
        <AvatarImg link="../src/assets/images/avatar.png" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="#/action-1">Manage Profiles</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButtonCustom;
