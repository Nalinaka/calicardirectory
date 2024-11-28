import React from "react";


const ContactForm = ({ toggleModal, isModalOpen }) => {

return (
  <div>
  <button onClick={toggleModal}>Contact Us</button>

  {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal__content">
            <button className="modal__close" onClick={toggleModal}>
              X
            </button>
            <h3 className="form__submit-h3">Let's have a chat!</h3>
            <form onSubmit={toggleModal}>
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
          </div>
        </div>
  )}
        </div>
  );
};

export default ContactForm;