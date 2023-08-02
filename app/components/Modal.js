import styles from "@/app/styles/Modal.module.css"

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose()
  }

  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={`${styles.modal} ${isOpen && styles.active}`} onClick={closeModal}>
      <div className={styles.modalContent}>
        <div className={styles.box} onClick={handleContentClick}>
          <div className={styles.closeButton} onClick={closeModal}>
            <i className="ph ph-x"></i>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
