import {BorderBottom, InnerNavLeft, InnerNavRight, Navbar, NavItem} from "./Nav.style";

// Styled Components
function Nav() {
    return (
        <>
            <Navbar>
                <InnerNavLeft>
                    <NavItem>LEEHOUSE</NavItem>
                </InnerNavLeft>
                <InnerNavRight>
                    <NavItem>시공사례</NavItem>
                    <NavItem>시공견적</NavItem>
                    <NavItem>시공자재</NavItem>
                </InnerNavRight>
            </Navbar>
        </>
    )
}

export {Nav}