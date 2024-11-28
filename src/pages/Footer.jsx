import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal state
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <footer>
      <div className="footer__container">
        <div className="row footer__row">
          {/* /* Button to open the modal */ }
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
          <a
            href="/cars"
            className="footer__class--link2 link__hover-effect link__hover-effect-white"
          >
            More Car Info
          </a>
          <div className="footer__copyright">
            Copyright © 2024 Nalini Krishan
          </div>
        </div>
      {/* Conditionally render the ContactForm modal */}
      {isModalOpen && <ContactForm toggleModal={toggleModal} />}
    </footer>
  );
};

export default Footer;



// import React, { useState } from "react";
// import ContactForm from "./ContactForm";

// const Footer = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//   };

//   return (
//     <footer>
//       <div className="footer__container">
//         <div className="row footer__row">
//         <ContactForm/>
//           <a
//             href="/cars"
//             className="footer__class--link2 link__hover-effect link__hover-effect-white"
//           >
//             More Car Info
//           </a>
//           <div className="footer__copyright">Copyright © 2024 Nalini Krishan</div>
//         </div>
//       </div>
//     </footer>
//   );
// };


// export default Footer;