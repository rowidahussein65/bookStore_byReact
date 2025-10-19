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
            title: "Message Sent Successfully!",
            text: "Thank you for contacting us. We’ll get back to you soon.",
            showConfirmButton: false,
            timer: 2000,
          });
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#000",
          });
        }
      );
  };

  return (
    <div className="w-50 shadow-lg p-4 rounded-4 m-auto mt-5 bg-white">
      <div className="text-center mb-4">
        <h3 className="fw-bold">Contact Us</h3>
        <p className="text-muted">
          We'd love to hear from you! Please fill out the form below.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="d-flex flex-column gap-3"
      >
        <div>
          <label htmlFor="name" className="form-label fw-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label fw-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label fw-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            className="form-control"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-dark px-4 py-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
