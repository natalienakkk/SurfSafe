import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    background: 'white',
    maxWidth: '500px',

    margin: (100,100,100,100),
    top: 'calc(50%)', // Center vertically and add a top margin of 20px
    left: 'calc(50%)',
    right: 'calc(50%)',
    bottom:'calc(50%)',

    overflow: 'hidden',
    borderRadius: '10px',
    padding: '20px',
    zIndex: 500,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 900,
  },
};


const ReusableModal = ({ isOpen, onClose, title, content }) => {
  return (
    <Modal className="ReusableModal" 
    class="ReusableModal"
    style={customStyles} 
    isOpen={isOpen} onRequestClose={onClose} contentLabel={title}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};



export default ReusableModal;