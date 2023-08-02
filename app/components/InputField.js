"use client"
import React, { useState } from "react"
import styles from "@/app/styles/InputField.module.css"
const InputField = ({
  ref,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  icon,
  prefix,
  mt,
  max,
  maxLength,
  autoFocus,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  return (
    <div className={styles.container} prefix={prefix} icon={icon} mt={mt}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.field}>
        <div className={styles.icon}>
          <i className={`ph ph-${show ? "lock-key-ope" : icon}`}></i>
        </div>
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          type={show ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          value={value}
          max={max}
          maxLength={maxLength}
          required={required ? true : false}
          autoFocus={autoFocus}
        />
        {type === "password" && (
          <div className="eye" onClick={() => setShow(!show)}>
            <i className={show ? `ph ph-eye` : "ph ph-eye-slash"}></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputField
