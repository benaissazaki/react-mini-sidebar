import React from "react"
import styled from "styled-components";
import Proptypes from 'prop-types'

const NavigationItem = styled.li`
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props => props.color || 'black'};
    &:hover {
        background-color:  ${props => props.hoverBgColor};
    }

    .active & {
        border-left: solid blue 2px;
    }
`

export const MiniSidebarNavigationitem = ({children, color='black', hoverBgColor="rgba(255, 255, 255, 0.1)"}) => {
    return (
        <NavigationItem className="sidebar-nav-item" color={color} hoverBgColor={hoverBgColor}>
            {children}
        </NavigationItem>
    )
}

MiniSidebarNavigationitem.propTypes = {
    color: Proptypes.string,
    hoverColor: Proptypes.string
}