import { Modal, Fade } from "@mui/material";
import "./AppModal.css";

export default function AppModal({ showModal, setShowModal, children }) {
  return (
    <Modal
      keepMounted
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      className="app-modal"
    >
      <Fade in={showModal}>
        <div className="app-modal-paper">{children}</div>
      </Fade>
    </Modal>
  );
}
