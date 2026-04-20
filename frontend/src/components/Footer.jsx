import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaFileDownload, 
  FaPaperPlane 
} from "react-icons/fa";

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hanna Maria",
          from_email: form.email,
          to_email: "hannamarialim1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const socialLinks = [
    { name: "Email", icon: <FaEnvelope />, link: "mailto:hannamarialim1@gmail.com", color: "hover:text-red-500" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hanna-maria-lim", color: "hover:text-blue-500" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/asabrightzzz", color: "hover:text-gray-400" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/asabright_/", color: "hover:text-pink-500" },
    { name: "CV", icon: <FaFileDownload />, link: "/.pdf", color: "hover:text-[#18c8ff]" },
  ];

  return (
    <footer className="w-full pt-12 pb-8 overflow-hidden relative z-30">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        
        {/* Inbox / Contact Form */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-3xl border border-white/10 w-full relative group"
        >
          {/* glow effect Background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#18c8ff] to-[#a259ff] rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <h3 className="text-white font-black md:text-[30px] sm:text-[24px] text-[20px] mb-6 flex items-center gap-3 relative z-10">
            Drop a Message <FaPaperPlane className="text-[#18c8ff] text-sm animate-bounce relative z-10" />
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 pointer-events-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex flex-col flex-1">
                <span className="text-white font-medium mb-2 text-sm">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-xl border border-white/5 outline-none focus:border-[#18c8ff] transition-all relative z-[50] pointer-events-auto"
                  required
                />
              </label>
              <label className="flex flex-col flex-1">
                <span className="text-white font-medium mb-2 text-sm">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-xl border border-white/5 outline-none focus:border-[#18c8ff] transition-all relative z-[50] pointer-events-auto"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Say something amazing..."
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-xl border border-white/5 outline-none focus:border-[#18c8ff] transition-all resize-none relative z-[50] pointer-events-auto"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-[#18c8ff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 relative z-[50] pointer-events-auto"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Bagian Kanan Footer */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="lg:w-[350px] w-full flex flex-col justify-between h-full py-2"
        >
          <div>
            <h2 className="text-white text-[40px] font-bold">Get in <span className="text-[#18c8ff]">Touch.</span></h2>
            <p className="text-secondary mt-4 leading-[24px]">
              Interested in collaborating or just want to say hi? My inbox is always open for new opportunities.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-white font-medium mb-4">Find me on:</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-2xl bg-tertiary flex items-center justify-center text-xl text-white border border-white/5 transition-all duration-300 ${social.color} hover:bg-white/10 hover:-translate-y-2`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-transparent to-white/5 border-r border-white/10">
             <p className="text-secondary text-[12px]">Currently based in</p>
             <p className="text-white text-[14px] font-bold">Bogor, Indonesia 🇮🇩</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-sm">
        <p>©2025 Hanna. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "contact");