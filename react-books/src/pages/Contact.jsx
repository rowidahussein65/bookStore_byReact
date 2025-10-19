import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xooj261", "template_hf3vx0e", form.current, {
        publicKey: "ka36AIWzpKye-sfwq",
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Message failed!",
            text: "Please try again later.",
          });
        }
      );
  };

  return (
    <div className="w-50 shadow m-auto text-center rounded-2 mt-3">
      <div className="w-100 text-center my-4">
        <h3>Contact</h3>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="d-flex flex-column gap-2 p-4 text-start"
      >
        <div className="d-flex flex-column gap-1">
          <label htmlFor="name" className="fw-medium fs-6">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="user_name"
            required
          />
        </div>

        <div className="d-flex flex-column gap-1">
          <label htmlFor="email" className="fw-medium fs-6">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="user_email"
            required
          />
        </div>

        <div className="d-flex flex-column gap-1">
          <label htmlFor="message" className="fw-medium fs-6">
            Your Message
          </label>
          <textarea
            id="message"
            className="form-control"
            name="message"
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-25">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
