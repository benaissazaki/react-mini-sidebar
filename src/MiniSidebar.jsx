import React, { Fragment } from "react"
import { useState } from "react";
import styles from "./MiniSidebar.module.css";

export const MiniSidebar = ({ children, collapseOnMd = false }) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <div className={`${styles.overlay} ${collapsed ? "" : styles.active} ${!collapsed && collapseOnMd ? styles.active_md : ""}`}></div>
            <aside className={`${styles.sidebar} ${collapsed ? "" : styles.expanded} ${collapseOnMd && styles.sidebar_collapsable_md} ${!collapsed && collapseOnMd ? styles.expanded_md : "" }`}>
                {children}
                <button
                    className={`${styles.sidebar_collapse_btn} ${collapseOnMd ? styles.sidebar_collapse_btn_md : ""} ${collapsed ? styles.sidebar_collapse_btn_collapsed : styles.sidebar_collapse_btn_expanded}`}
                    onClick={() => setCollapsed(!collapsed)}>
                    →
                </button>
            </aside>
        </>
    )
}