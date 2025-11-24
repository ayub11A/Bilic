import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi! My name is ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const phone = "252619355029";
    const waLink = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(waLink, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Contact <span className="text-green-500">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {/* 🌍 Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9563702150445!2d45.318161!3d2.046934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58d7a2fba0d3d5%3A0x2a5e0324a4a6fbb1!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sso!4v1700000000000!5m2!1sen!2sso"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl border-0"
          ></iframe>

          <div className="p-4 bg-white">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">call us</h2>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-gray-500" />
              <span>+252 619355029</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mt-2">
              <FaEnvelope className="text-gray-500" />
              <span>info@bilic-dhallaan.com</span>
            </div>
          </div>
        </div>

        {/* ✉️ Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
