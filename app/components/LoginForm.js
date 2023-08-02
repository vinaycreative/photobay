import React from "react"
import InputField from "./InputField"
import Modal from "./Modal"
import styles from "@/app/styles/Form.module.css"
const LoginForm = ({ isOpen, onModalClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <div className={styles.box}>
        <div className={styles.content}>
          <i className="ph ph-sparkle"></i>
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in.</p>
        </div>
        <form>
          <InputField label={"username"} icon={"user"} type={"text"} />
          <InputField label={"password"} icon={"lock"} type={"text"} />
          <button className={styles.button}>Sign up</button>
        </form>
      </div>
    </Modal>
  )
}

export default LoginForm
