const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "-20px",
    right: "-10px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Modal;
