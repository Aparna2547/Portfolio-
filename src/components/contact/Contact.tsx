export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <p className="text-blue-600 font-semibold">
        CONTACT
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Let's Work Together
      </h2>

      <div className="mt-12 space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <textarea
          rows={6}
          placeholder="Message"
          className="w-full rounded-xl border p-4 bg-transparent"
        />

        <button className="rounded-xl bg-black px-8 py-4 text-white">
          Send Message
        </button>

      </div>
    </section>
  );
}