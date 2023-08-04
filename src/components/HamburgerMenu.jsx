import React, { useState } from 'react'
import CancelBtn from '../images/cancelBtn.jpg'

function HamburgerMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <header>
        <div className="navbar-menu">
          <div className="hamburger" onClick={handleMenuClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img className="close" onClick={handleCloseModal} src={CancelBtn} alt="" />
          <ul>
          <li><a href="#footer" onClick={handleCloseModal}>Contacts</a></li>
          <li><a href="#descs-text" onClick={handleCloseModal}>About</a></li>
          <li><a href="#real-projects"onClick={handleCloseModal}>Projects</a></li>
          </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default HamburgerMenu;
