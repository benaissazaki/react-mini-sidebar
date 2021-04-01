import React from "react"
import styled from "styled-components";

const Navigation = styled.ul`
    list-style: none;
    padding-left: 0px;

    & a {
        text-decoration: none;
    }
`

export const MiniSidebarNavigation = (props) => {
    return (
        <nav>
            <Navigation>
                {props.children}
            </Navigation>
        </nav>
    )
}