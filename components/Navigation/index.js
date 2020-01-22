import { Nav, NavItem, NavLink } from "shards-react";

function Navigation() {
  return (
    <Nav vertical={true}>
      <NavItem>
        <NavLink active href="#">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation
