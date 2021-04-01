import React, { Fragment } from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './MiniSidebar.module.css'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.activeMd ? 'rgba(0, 0, 0, 0.5)' :'rgba(0, 0, 0, 0)'};
    transition: background-color 1s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;
    ${props => props.active &&
        `@media(max-width) {
            background-color: rgba(0, 0, 0, 0.5);
        }`
    }
`

export const MiniSidebar = ({ children, collapseOnMd = false, withOverlay = true, expandOnHover = false }) => {
    const [collapsed, setCollapsed] = useState(true);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            <Overlay active={!collapsed && withOverlay} activeMd={!collapsed && collapseOnMd && withOverlay} />
            <aside onMouseEnter={() => (expandOnHover && !isMobile) && setCollapsed(false)} onMouseLeave={() => (expandOnHover && !isMobile) && setCollapsed(true)} className={`${styles.sidebar} ${collapsed ? "" : styles.expanded} ${collapseOnMd && styles.sidebar_collapsable_md} ${!collapsed && collapseOnMd ? styles.expanded_md : ""}`}>
                {children}

                {(!expandOnHover || isMobile) &&
                    <button
                        className={`${styles.sidebar_collapse_btn} ${collapseOnMd ? styles.sidebar_collapse_btn_md : ""} ${collapsed ? styles.sidebar_collapse_btn_collapsed : styles.sidebar_collapse_btn_expanded}`}
                        onClick={() => setCollapsed(!collapsed)}>
                        →
                    </button>
                }
            </aside>
        </>
    )
}

MiniSidebar.propTypes = {
    collapseOnMd: Proptypes.bool,
    withOverlay: Proptypes.bool,
    expandOnHover: Proptypes.bool
}