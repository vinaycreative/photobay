import React from "react"
import InputField from "./InputField"
import Modal from "./Modal"
import styles from "@/app/styles/Form.module.css"
const SignupForm = ({ isOpen, onModalClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <div className={styles.box}>
        <div className={styles.content}>
          <i className="ph ph-sparkle"></i>
          <h1>Signup</h1>
          <p>Create an account and start downloading thousand of images free.</p>
        </div>
        <form>
          <InputField label={"username"} icon={"user"} type={"text"} />
          <InputField label={"email"} icon={"envelope"} type={"text"} />
          <InputField label={"password"} icon={"lock"} type={"text"} />
          <button className={styles.button}>Sign up</button>
        </form>
      </div>
    </Modal>
  )
}

export default SignupForm
