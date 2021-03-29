import React from "react"
import styles from "./MiniSidebar.module.css";

export const MiniSidebarNavigationLabel = (props) => {
    return (
        <div className={styles.sidebar_navigation_label}>
            {props.children}
        </div>
    )
}