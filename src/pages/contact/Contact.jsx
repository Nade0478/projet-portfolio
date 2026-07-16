import React, { useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "../../styles/home.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <>
      <Menu />

      <div className="contact-container">
        <h1 className="contact-title">Contactez-moi</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <label className="contact-label">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="contact-input"
            required
          />

          <label className="contact-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="contact-input"
            required
          />

          <label className="contact-label">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="contact-textarea"
            required
          />

          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
