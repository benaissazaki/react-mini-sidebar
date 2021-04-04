import React from "react"
import styled from "styled-components";
import Proptypes from 'prop-types'

const NavigationIcon = styled.div`
    display: inline-block;
    width: 50px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;

    & svg, & img {
        max-width: 100%;
        max-height: 30px;
    }

    & svg {
        fill: ${props => props.fillColor};
    }
`

export const MiniSidebarNavigationIcon = ({children, fillColor="black"}) => {
    return (
        <NavigationIcon className="sidebar-nav-icon" fillColor={fillColor}>
            {children}
        </NavigationIcon>
    )
}

MiniSidebarNavigationIcon.propTypes = {
    fillColor: Proptypes.string
}