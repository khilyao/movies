import { Nav, StyledNavLink, List, Item } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledNavLink to="/">Home</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Item>
      </List>
    </Nav>
  );
};

export default Navigation;
