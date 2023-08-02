import styles from "@/app/styles/SkeletonImageCard.module.css"
const SkeletonImageCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.photo}></div>
      <div className={styles.tags}>
        <div className={styles.tag}></div>
        <div className={styles.tag}></div>
        <div className={styles.tag}></div>
      </div>
    </div>
  )
}

export default SkeletonImageCard
