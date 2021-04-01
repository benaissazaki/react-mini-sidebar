import React from "react"
import styled from "styled-components";

const NavigationItem = styled.li`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 300px;

    &:hover {
        background-color: #e2e2e2;
    }

    .active & {
        border-left: solid blue 2px;
    }
`

export const MiniSidebarNavigationitem = (props) => {
    return (
        <NavigationItem>
            {props.children}
        </NavigationItem>
    )
}