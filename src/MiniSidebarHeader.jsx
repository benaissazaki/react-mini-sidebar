import React from "react"
import styled from "styled-components";
import Proptypes from 'prop-types'

const Header = styled.div`
    border-bottom: solid 1px #e2e2e2;
    padding: 15px;
    text-align: center;
    color: ${props => props.color};
`

export const MiniSidebarHeader = ({children, color='black'}) => {
    return (
        <Header color={color}>
            {children}
        </Header>
    )
}

MiniSidebarHeader.propTypes = {
    color: Proptypes.string
}