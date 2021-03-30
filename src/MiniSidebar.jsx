import React, { Fragment } from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './MiniSidebar.module.css'
import Proptypes from 'prop-types'

export const MiniSidebar = ({ children, collapseOnMd = false, withOverlay = true, extendOnHover = false }) => {
    const [collapsed, setCollapsed] = useState(true);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
        <>
            <div className={`${styles.overlay} ${!collapsed && withOverlay ? styles.active : ''} ${!collapsed && collapseOnMd && withOverlay ? styles.active_md : ""}`}></div>
            <aside onMouseEnter={() => (extendOnHover && !isMobile) && setCollapsed(false)} onMouseLeave={() => (extendOnHover && !isMobile) && setCollapsed(true)} className={`${styles.sidebar} ${collapsed ? "" : styles.expanded} ${collapseOnMd && styles.sidebar_collapsable_md} ${!collapsed && collapseOnMd ? styles.expanded_md : ""}`}>
                {children}

                {(!extendOnHover || isMobile) &&
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
    extendOnHover: Proptypes.bool
}