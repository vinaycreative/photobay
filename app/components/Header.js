"use client"
import React, { useState } from "react"
import Container from "@/app/containers/Container"
import styles from "@/app/styles/Header.module.css"
import Link from "next/link"
import SignupForm from "./SignupForm"
import LoginFOrm from "./LoginForm"
import LoginForm from "./LoginForm"
const Header = () => {
  const [isSignupModal, setIsSignupModal] = useState(false)
  const [isLoginModal, setIsLoginModal] = useState(false)

  const handleSignupModalClose = () => {
    setIsSignupModal(!isSignupModal)
  }
  const handleLoginModalClose = () => {
    setIsLoginModal(!setIsLoginModal)
  }

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <Link href={"/"}>
              <img src="/assets/images/logo-1.svg" alt="logo" />
            </Link>
          </div>
          <div className={styles.action}>
            <button className={styles.button} onClick={() => setIsLoginModal(true)}>
              Login
            </button>
            <button className={styles.button} onClick={() => setIsSignupModal(true)}>
              Create Account
            </button>
          </div>
        </nav>
      </Container>
      <SignupForm isOpen={isSignupModal} onModalClose={handleSignupModalClose} />
      <LoginForm isOpen={isLoginModal} onModalClose={handleLoginModalClose} />
    </header>
  )
}

export default Header
