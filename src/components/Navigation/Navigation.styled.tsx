import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 10px;

  box-shadow: 1px 2px 3px #000;
`;

export const List = styled.ul`
  display: flex;
  padding: 10px 30px;

  background-color: #fff;

  list-style: none;
`;

export const Item = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  padding: 10px;

  font-family: "Courier New", Courier, monospace;
  font-size: 22px;
  font-weight: 700;

  color: #fff;
  background-color: #000;
  text-decoration: none;

  transition:
    background-color 200ms linear,
    color 200ms linear;

  &:hover {
    color: #000;
    background-color: #997f7f;
  }

  &.active {
    color: #000;
    background-color: #5e9280;
  }
`;
