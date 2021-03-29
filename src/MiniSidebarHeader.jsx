import React from "react"
import styles from "./MiniSidebar.module.css";

export const MiniSidebarHeader = (props) => {
    return (
        <div className={styles.sidebar_header}>
            {props.children}
        </div>
    )
}