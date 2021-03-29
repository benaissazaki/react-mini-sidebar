import React from "react"
import styles from "./MiniSidebar.module.css";

export const MiniSidebarNavigationIcon = (props) => {
    return (
        <div className={styles.sidebar_navigation_icon}>
            {props.children}
        </div>
    )
}