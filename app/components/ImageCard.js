import React from "react"
import styles from "@/app/styles/ImageCard.module.css"
import Link from "next/link"
const ImageCard = ({ url, tags, onClick }) => {
  const tagsString = tags
  const tagsArray = tagsString.split(", ")
  return (
    <div className={styles.card}>
      <div className={styles.photo} onClick={onClick}>
        <img src={url} alt="photo" />
      </div>
      <div className={styles.tags}>
        {tagsArray &&
          tagsArray.map((tag, index) => {
            return (
              <Link href={`/search/${tag}`} key={index} className={styles.tag}>
                {tag}
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default ImageCard
