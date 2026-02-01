"use client";
import { useState, useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function ContactForm({ onClose, showToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [showContent, setShowContent] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // trigger toast dari parent
  useEffect(() => {
    if (status === "success") showToast?.("Sent Success");
    if (status === "error") showToast?.("Send Failed");
  }, [status, showToast]);

  return (
    <div
      ref={formRef}
      className={`w-full bg-[hsl(175,37%,38%)] rounded-lg transition-all duration-700 ease-out overflow-hidden ${
        showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {onClose && (
        <div className="flex justify-end mb-3 overflow-hidden border-1 border-[hsl(175,37%,38%)]">
          <button
            onClick={onClose}
            className="bg-[hsl(173,39%,62%)] hover:bg-[hsl(44,55%,73%)]  pl-2 pb-1 2xl:text-2xl lg:text-lg transition-all hover:scale-110 rounded-bl-full"
          >
            <IoCloseSharp />
          </button>
        </div>
      )}

      <div className="max-w-xl mx-2 p-6 text-white">
        <h2 className="2xl:text-3xl lg:text-2xl font-bold 2xl:mb-6 lg:mb-4 text-center tracking-wide">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col 2xl:gap-4 lg:gap-2"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="2xl:p-3 lg:p-2 text-sm rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-[hsl(173,39%,62%)] transition"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="2xl:p-3 lg:p-2 text-sm rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-[hsl(173,39%,62%)] transition"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-custom 2xl:p-3 lg:p-2 text-sm rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:border-[hsl(173,39%,62%)] transition resize-none
            "
            required
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="2xl:mt-2 2xl:py-3 lg:mt-1 lg:py-2 text-sm bg-[hsl(173,39%,62%)] text-white font-semibold  rounded-xl hover:scale-[1.02] hover:bg-[hsl(44,55%,73%)] active:scale-[0.98] transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
