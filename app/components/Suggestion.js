import React from "react"
import Container from "../containers/Container"
import styles from "@/app/styles/Suggestion.module.css"
import Link from "next/link"

const Suggestion = ({ synonyms }) => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          {synonyms ? (
            synonyms.slice(0, 8).map((synony, index) => {
              return (
                <Link className={styles.suggestion} href={`/search/${synony}`} key={index}>
                  {synony}
                </Link>
              )
            })
          ) : (
            <>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
              <div className={styles.skeleton}></div>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Suggestion
