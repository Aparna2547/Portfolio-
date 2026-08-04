"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <p className="text-blue-600 font-semibold">CONTACT</p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Let's Work Together
      </h2>

      <form onSubmit={handleSubmit} className="mt-12 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <textarea
          rows={6}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-black px-8 py-4 text-white disabled:bg-gray-400"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}