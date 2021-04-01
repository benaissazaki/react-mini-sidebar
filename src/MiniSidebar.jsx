import React, { Fragment } from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.activeMd ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
    transition: background-color 1s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;
    ${props => props.active ?
        `@media(max-width: 768px) {
            background-color: rgba(0, 0, 0, 0.5);
        }`: ''
    }
`

const Sidebar = styled.aside`
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    height: 100%;
    background-color: ${props => props.bgColor || 'white'};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: width 1s;
    z-index: 10000;
    ${props => props.collapsableMd ?
        `width: ${props.collapsedWidth || '70px'};`
        :
        `width: ${props.width || '250px'};`
    }

    ${props => props.expandedMd &&
        `width: ${props.width || '250px'};`
    }

    @media(max-width: 768px) {
        ${props => props.expanded ?
        `width: ${props.width || '250px'};`
        :
        `width: ${props.collapsedWidth || '70px'};`
        }
    }

`

const CollapseBtn = styled.button`
    background-color: transparent;
    padding-bottom: 10px;
    display: ${props => props.collapseOnMd ? 'block' : 'none'};
    border: none;
    font-size: 40px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    transition: transform 1s;
    
    &:focus {
        outline: none;
    }

    transform: ${props => props.collapsed ? 'rotate(0deg)' : 'rotate(180deg)'};

    @media(max-width: 768px) {
        display: block;
    }

`

export const MiniSidebar = ({ children, collapseOnMd = false, withOverlay = true, expandOnHover = false }) => {
    const [collapsed, setCollapsed] = useState(true);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            <Overlay active={!collapsed && withOverlay} activeMd={!collapsed && collapseOnMd && withOverlay} />
            <Sidebar
                onMouseEnter={() => (expandOnHover && !isMobile) && setCollapsed(false)}
                onMouseLeave={() => (expandOnHover && !isMobile) && setCollapsed(true)}
                expanded={!collapsed}
                collapsableMd={collapseOnMd}
                expandedMd={!collapsed && collapseOnMd}>

                {children}

                {(!expandOnHover || isMobile) &&
                    <CollapseBtn onClick={() => setCollapsed(!collapsed)} collapseOnMd={collapseOnMd} collapsed={collapsed}>
                        →
                    </CollapseBtn>
                }

            </Sidebar>

        </>
    )
}

MiniSidebar.propTypes = {
    collapseOnMd: Proptypes.bool,
    withOverlay: Proptypes.bool,
    expandOnHover: Proptypes.bool
}