"use client"
import React, { useState } from "react"
import Masonry from "react-masonry-css"
import Container from "../containers/Container"
import styles from "@/app/styles/Gallary.module.css"
import ImageCard from "./ImageCard"
import Spiner from "./Spiner"
import SkeletonImageCard from "./SkeletonImageCard"
import ImageDialog from "./ImageDialog"
const Gallary = ({ data, loadMore, isLoading }) => {
  const [isModal, setIsModal] = useState(false)
  const [modalPhoto, setModalPhoto] = useState()
  const dummyArray = new Array(20).fill(null)
  const handleModalOpen = (data) => {
    setIsModal(true)
    setModalPhoto(data)
  }
  const handleModalClose = () => {
    setIsModal(false)
    setModalPhoto()
  }
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <div className={styles.gallary}>
      <ImageDialog isOpen={isModal} onClose={handleModalClose} data={modalPhoto} />
      <Container>
        <div className={styles.wrapper}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.grid}
            columnClassName={styles.column}
          >
            {data
              ? data.map((item) => {
                  return (
                    <ImageCard
                      onClick={() => handleModalOpen(item)}
                      url={item.webformatURL}
                      tags={item.tags}
                    />
                  )
                })
              : dummyArray.map((_, index) => {
                  return <SkeletonImageCard key={index} />
                })}
          </Masonry>
          <div className={styles.loadcontainer}>
            {isLoading ? (
              <Spiner />
            ) : (
              <button onClick={loadMore} className={styles.button}>
                Load more
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallary
