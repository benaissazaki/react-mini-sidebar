import React from "react"
import styles from "./MiniSidebar.module.css";

export const MiniSidebarNavigation = (props) => {
    return (
        <ul className={styles.sidebar_navigation}>
            {props.children}
        </ul>
    )
}