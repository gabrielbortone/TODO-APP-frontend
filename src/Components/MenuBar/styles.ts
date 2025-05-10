import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuBarContainer = styled.nav`
    display: flex;
    max-width: 80%;
    align-items: center;
    justify-content: center;
`;

export const MenuElements = styled.ul`
    max-width: 100%;
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 1.5rem;
`;  

export const MenuItem = styled.li`
    font-family: "Roboto Slab", serif;
    font-size: 1.125rem;
    line-height: 1.4;
    color: #E5E7EB;
    font-weight: 500;
    padding: 0.75rem;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #E5E7EB;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    
    &.active {
        color: #16A34A;
    }

    &:hover {
    background: #22C55E;
  }
`;