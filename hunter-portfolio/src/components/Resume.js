import React, { useState } from "react";
import "./css/ResumeModal.css";


//I need to add my resume download... used a modal just to show functionality
const ResumeModal = ({ resume }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id= 'resume'>
      <button onClick={toggleModal}>View Resume</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={toggleModal} className="close">
              &times;
            </span>
            <h2>Resume</h2>
            <p >{resume}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeModal;
