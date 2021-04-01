import React from "react"
import styled from "styled-components";

const NavigationLabel = styled.div`
    display: inline-block;
    width: 150px;
    font-size: 20px;
    font-weight: 100;
    position: relative;
    bottom: 8px;
`

export const MiniSidebarNavigationLabel = (props) => {
    return (
        <NavigationLabel>
            {props.children}
        </NavigationLabel>
    )
}