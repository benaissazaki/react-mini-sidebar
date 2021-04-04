import React from "react"
import styled from "styled-components";
import Proptypes from 'prop-types'

const NavigationItem = styled.li`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props => props.color || 'black'};
    &:hover {
        background-color: #e2e2e2;
    }

    .active & {
        border-left: solid blue 2px;
    }
`

export const MiniSidebarNavigationitem = ({children, color='black'}) => {
    return (
        <NavigationItem className="sidebar-nav-item" color={color}>
            {children}
        </NavigationItem>
    )
}

MiniSidebarNavigationitem.propTypes = {
    color: Proptypes.string
}