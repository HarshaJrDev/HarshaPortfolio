import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-10 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      {/* Contact Info */}
      <p className="text-lg">📞 Phone: <span className="font-semibold">+91 8712900170</span></p>
      <p className="text-lg">✉️ Email: <a href="mailto:ravuriharsha01@gmail.com" className="text-orange-400 hover:underline">ravuriharsha01@gmail.com</a></p>
      <p className="text-lg mt-4">
        🔗 <a href="https://www.linkedin.com/in/ravuri-harshavardhan-52220726b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-orange-400 hover:underline">LinkedIn</a> |
        <a href="https://github.com/HarshaJrDev" className="text-orange-400 hover:underline mx-2">GitHub</a> |
        <a href="https://portfolio.com" className="text-orange-400 hover:underline">Portfolio</a>
      </p>

      {/* Contact Form */}
      <form className="mt-8 max-w-lg mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" required />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-800 text-white h-32" required></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition-all">Send Message</button>
      </form>

      {/* Copyright */}
      <p className="mt-10 text-gray-500 text-sm">© {new Date().getFullYear()} Ravuri HarshaVardhan. All rights reserved.</p>
    </div>
  );
};

export default Contact;
