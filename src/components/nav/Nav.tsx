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
                    <NavItem>서비스 소개</NavItem>
                    <NavItem>시공 견적</NavItem>
                    <NavItem>자재</NavItem>
                    <NavItem>시공 사례</NavItem>
                </InnerNavRight>
            </Navbar>
            <BorderBottom />
        </>
    )
}

export {Nav}