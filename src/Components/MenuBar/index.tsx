import { MenuBarContainer, MenuElements, MenuItem, StyledNavLink } from "./styles";

export default function MenuBar(){
    return (<MenuBarContainer>
        <MenuElements>
            <MenuItem><StyledNavLink to="/">Home</StyledNavLink></MenuItem>
            <MenuItem><StyledNavLink to="/categories">Categories</StyledNavLink></MenuItem>
            <MenuItem><StyledNavLink to="/settings">Settings</StyledNavLink></MenuItem>
            <MenuItem><StyledNavLink to="/about">About</StyledNavLink></MenuItem>
        </MenuElements>
    </MenuBarContainer>);
}
