import React from "react"
import styles from "@/app/styles/Grid.module.css"
const Grid = ({ type, children }) => {
  return <div className={styles.grid}>{children}</div>
}

export default Grid
