function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 mt-24 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        {/* LEFT - MAP */}
        <div>
          <h3 className="text-lg mb-5 text-black dark:text-white font-medium tracking-wide">
            Locate Us
          </h3>

          <iframe
            src="https://www.google.com/maps?q=28.651577,77.183540&z=15&output=embed"
            className="w-full h-[220px] border-0 rounded-lg shadow-sm"
            loading="lazy"
          ></iframe>

          <a
            href="https://www.google.com/maps?q=28.651577,77.183540"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-sm text-gray-500 dark:text-gray-400 hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        {/* CENTER - CONTACT */}
        <div>
          <h3 className="text-lg mb-5 text-black dark:text-white font-medium tracking-wide">
            Contact
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            For bulk orders and business inquiries:
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>📞 +91 9711480708</p>
            <p>📞 +91 9354902078</p>
            <p className="mt-2">📧 unit27@gmail.com</p>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            UNIT 27 is a premium denim manufacturer and wholesaler.
          </p>
        </div>

        {/* RIGHT - LINKS + QR */}
        <div>
          <h3 className="text-lg mb-5 text-black dark:text-white font-medium tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-black dark:hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-black dark:hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-black dark:hover:text-white transition"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-black dark:hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* QR */}
          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              Scan Me
            </p>
            <img
              src="/qr.png"
              alt="QR"
              className="w-28 mx-auto hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-5 text-sm text-gray-500 dark:text-gray-400">
        © 2025 UNIT 27 — THE INDUSTRIAL STANDARD
      </div>
    </div>
  );
}

export default Footer;
