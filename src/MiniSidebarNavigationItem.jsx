import React from "react"
import styles from "./MiniSidebar.module.css";

export const MiniSidebarNavigationitem = (props) => {
    return (
        <li className={styles.sidebar_navigation_item}>
            {props.children}
        </li>
    )
}