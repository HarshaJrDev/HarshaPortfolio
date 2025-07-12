import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6 py-20 text-center font-poppins"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-orange-400">📬 Contact Me</h2>

      {/* Contact Info */}
      <div className="text-gray-300 text-lg space-y-2">
        <p>📞 Phone: <span className="font-semibold text-white">+91 8712900170</span></p>
        <p>
          ✉️ Email:{" "}
          <a
            href="mailto:ravuriharsha01@gmail.com"
            className="text-orange-400 hover:underline"
          >
            ravuriharsha01@gmail.com
          </a>
        </p>
        <p className="mt-4 space-x-3">
          <a
            href="https://www.linkedin.com/in/ravuri-harshavardhan-52220726b"
            target="_blank"
            className="text-orange-400 hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://github.com/HarshaJrDev"
            target="_blank"
            className="text-orange-400 hover:underline"
          >
            GitHub
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://portfolio.com"
            target="_blank"
            className="text-orange-400 hover:underline"
          >
            Portfolio
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="mt-12 max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-black font-semibold py-3 rounded-lg shadow-lg transition-all"
        >
          🚀 Send Message
        </button>
      </form>

      {/* Footer */}
      <p className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Ravuri HarshaVardhan. All rights reserved.
      </p>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
