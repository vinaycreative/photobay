"use client"
import { useState } from "react"
import ImageSizeSelector from "./ImageSizeSelector"
import Link from "next/link"
import styles from "@/app/styles/ImageDialog.module.css"
import Modal from "./Modal"
const ImageDialog = ({ data, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("large")
  const imageSizes = ["small", "medium", "large", "original"]
  const handleSizeChange = (size) => {
    setSelectedSize(size)
  }
  // if (!data) return

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.dialogbox}>
        {data && (
          <>
            <div className={styles.header}>
              <h2>Product ID: {"id"}</h2>
            </div>
            <div className={styles.body}>
              <div className={styles.photo}>
                <img src={data.webformatURL} alt={`photo ${data.id}`} />
              </div>
              <div className={styles.details}>
                <div className={styles.box}>
                  <h2>Download</h2>
                  <div className={styles.sizes}>
                    <ImageSizeSelector
                      sizes={imageSizes}
                      selectedSize={selectedSize}
                      onSelectSize={handleSizeChange}
                    />
                  </div>
                  <Link
                    href={data.largeImageURL}
                    download={`photo+${data.id}`}
                    className={styles.downloadBtn}
                  >
                    Download free!
                  </Link>
                  <button className={styles.likeButton}>Like</button>
                </div>
                <div className={styles.box}>
                  <h2>Information</h2>
                  <div className={styles.information}>
                    <div className={styles.info}>
                      <span>User</span>
                      <p>{data.user}</p>
                    </div>
                    <div className={styles.info}>
                      <span>User ID</span>
                      <p>{data.user_id}</p>
                    </div>
                    <div className={styles.info}>
                      <span>Type</span>
                      <p>{data.type}</p>
                    </div>
                    <div className={styles.info}>
                      <span>Views</span>
                      <p>{data.views}</p>
                    </div>
                    <div className={styles.info}>
                      <span>Downloads</span>
                      <p>{data.downloads}</p>
                    </div>
                    <div className={styles.info}>
                      <span>Likes</span>
                      <p>564</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tags}>
              <h3>Tags: </h3>
              {data.tags.split(", ").map((tag, index) => {
                return (
                  <Link href={`/search/${tag}`} className={styles.tag}>
                    {tag}
                  </Link>
                )
              })}
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}

export default ImageDialog
