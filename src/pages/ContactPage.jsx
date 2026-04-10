import { useState } from "react";

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="bg-white text-black min-h-screen pt-32 px-6 pb-20 dark:bg-black dark:text-white">

      {/* SUCCESS TOAST */}
      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded shadow-lg text-sm z-50">
          Message sent successfully!
        </div>
      )}

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl tracking-[10px] mb-4">
          CONTACT
        </h1>

        <p className="text-gray-500 dark:text-gray-300 text-sm tracking-wide">
          LET’S BUILD SOMETHING STRONG TOGETHER
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-14 max-w-5xl mx-auto">

        {/* Left Info */}
        <div>
          <h2 className="text-2xl mb-4 font-medium tracking-wide">
            GET IN TOUCH
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            For business inquiries, bulk orders, or collaborations, feel free to
            reach out to us.
          </p>

          <p className="mb-2 text-gray-700 dark:text-gray-300">📧 unit27@gmail.com</p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">📞 +91 9711480708</p>

          <a
            href="https://wa.me/9711480708"
            target="_blank"
            className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm tracking-wide"
          >
            CHAT ON WHATSAPP
          </a>
        </div>

        {/* Right Form */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl mb-4 font-medium tracking-wide">
            SEND MESSAGE
          </h2>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-3 text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300 px-4 py-2 rounded text-sm text-center">
              {error}
            </div>
          )}

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target[0].value.trim();
              const email = e.target[1].value.trim();
              const message = e.target[2].value.trim();

              if (!name || !email || !message) {
                setError("Please fill all fields");
                return;
              }

              if (!email.includes("@")) {
                setError("Enter a valid email");
                return;
              }

              setError("");
              setSuccess(true);

              setTimeout(() => {
                setSuccess(false);
              }, 2000);

              e.target.reset();
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;