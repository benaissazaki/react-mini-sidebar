import React from "react"
import styled from "styled-components";

const Header = styled.div`
    border-bottom: solid 1px #e2e2e2;
    padding: 15px;
    text-align: center;
`

export const MiniSidebarHeader = (props) => {
    return (
        <Header>
            {props.children}
        </Header>
    )
}