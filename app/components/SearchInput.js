import React from "react"
import styles from "@/app/styles/SeaschInput.module.css"
const SearchInput = ({ placeholder, value, onChange, onKeyDown }) => {
  return (
    <div className={styles.search}>
      <i className="ph ph-magnifying-glass"></i>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default SearchInput
