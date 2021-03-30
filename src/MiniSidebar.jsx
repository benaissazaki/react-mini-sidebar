import React, { Fragment } from "react"
import { useState } from "react";
import styles from "./MiniSidebar.module.css";

export const MiniSidebar = ({ children, collapseOnMd = false, withOverlay = true, extendOnHover = false }) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <div className={`${styles.overlay} ${!collapsed && withOverlay ? styles.active : ''} ${!collapsed && collapseOnMd && withOverlay ? styles.active_md : ""}`}></div>
            <aside onMouseEnter={() => extendOnHover && setCollapsed(false)} onMouseLeave={() => extendOnHover && setCollapsed(true)} className={`${styles.sidebar} ${collapsed ? "" : styles.expanded} ${collapseOnMd && styles.sidebar_collapsable_md} ${!collapsed && collapseOnMd ? styles.expanded_md : ""}`}>
                {children}

                {!extendOnHover &&
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