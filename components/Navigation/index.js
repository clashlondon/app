import { Nav, NavItem, NavLink } from "shards-react";

function Navigation() {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="/">
          Clan
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/war">
          War Stats
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation
