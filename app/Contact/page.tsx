"use client";

import Header from "@/components/Header";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const inputStyle =
  "ps-3 mt-1 text-primary-dark-800 text-lg bg-[#D9D9D9] rounded-lg border border-[#F5F5F5] shadow-innerV2";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="w-full md:min-h-screen md:mb-2 mb-10">
      <div className="flex justify-center md:mt-10 mb-1 pt-4 md:pt-14">
        <Header title="Contact Me" />
      </div>

      <div className="relative w-5/6 text-white flex md:flex-row flex-col mx-auto justify-center items-center">
        <motion.form
          variants={fadeIn("right", "tween", 0.2, 1)}
          onSubmit={handleSubmit}
          className="w-5/6 sm:w-2/3 lg:w-2/5"
        >
          <div className="my-5 flex">
            <p className="text-secondary-blue md:text-4xl text-2xl text-center font-light mx-auto">
              Let&apos;s get in touch!
            </p>
          </div>

          {/* Inputs */}
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="name" className="font-thin">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`h-[40px] ${inputStyle}`}
              required
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="email" className="font-thin">
              e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`h-[40px] ${inputStyle}`}
              required
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="message" className="font-thin">
              message
            </label>
            <textarea
              id="message"
              name="message"
              className={`pt-2 ${inputStyle}`}
              rows={6}
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-[127px] h-[44px] rounded-xl border-2 border-accent-yellow-800 hover:bg-accent-yellow-800 hover:text-primary-dark-800 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="mt-4 text-green-500">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
