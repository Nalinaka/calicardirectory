import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';


const ContactModal = () => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to handle dark/light theme toggle
  const [contrastToggle, setContrastToggle] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Toggle dark/light theme
  const toggleContrast = () => {
    setContrastToggle((prev) => !prev);
  };

  useEffect(() => {
    // Update body class based on theme state
    if (contrastToggle) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [contrastToggle]); // Runs whenever contrastToggle changes

  // Move background shapes based on mouse position
  const moveBackground = (event) => {
    const shapes = document.querySelectorAll('.shape');
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    shapes.forEach((shape, i) => {
      const isOdd = i % 2 === 0;
      const direction = isOdd ? -1 : 1;
      shape.style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${x * direction * 10}deg)`;
    });
  };

  // Attach mousemove event listener
  useEffect(() => {
    window.addEventListener('mousemove', moveBackground);
    return () => {
      window.removeEventListener('mousemove', moveBackground);
    };
  }, []); // Runs only once when component mounts

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={toggleModal} className="open-modal-btn">
        Open Contact Form
      </button>

      {/* Button to toggle theme */}
      <button onClick={toggleContrast} className="theme-toggle-btn">
        Toggle Theme
      </button>

      {/* Conditional rendering of modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={toggleModal}>
              X
            </button>

            <h3>Let's have a chat!</h3>
            {/* Contact Form */}
            <form onSubmit={handleContactFormSubmit}>
              <div className="form__item">
                <label>Name</label>
                <input name="user_name" type="text" required />
              </div>
              <div className="form__item">
                <label>Phone</label>
                <input name="user_phone" type="tel" required />
              </div>
              <div className="form__item">
                <label>Email</label>
                <input name="user_email" type="email" required />
              </div>
              <div className="form__item">
                <label>Message</label>
                <textarea name="message" required></textarea>
              </div>

              <button type="submit" className="form__submit">
                Submit
              </button>
            </form>
              <div className="modal__success">
                <p>Thanks for your message! We'll get back to you soon.</p>
                <button onClick={toggleModal}>Close</button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;








