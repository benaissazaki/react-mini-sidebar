import React from "react"
import styled from "styled-components";

const NavigationLabel = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: 100;
    position: relative;
    bottom: 8px;
`

export const MiniSidebarNavigationLabel = (props) => {
    return (
        <NavigationLabel className="sidebar-nav-label">
            {props.children}
        </NavigationLabel>
    )
}