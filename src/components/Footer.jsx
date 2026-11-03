import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* 🔥 MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* 1. BRAND INFO & WELCOME MESSAGE */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-black text-black dark:text-white tracking-tighter">
              UNIT
            </h2>
            <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tighter leading-none">
                27
              </span>
            </div>
          </Link>

          <p className="text-sm leading-relaxed mb-4">
            <span className="font-bold text-black dark:text-white">
              Welcome to UNIT 27.
            </span>
            <br />
            Wanna know more about us? Connect with us, and our team will assist
            you ASAP. Have a Denim-Day!
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://wa.me/919711480708"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-[2px] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Our Collection
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* 3. CONTACT INFO */}
        <div>
          <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-[2px] mb-6">
            Bulk Orders
          </h3>
          <p className="text-sm mb-4">
            For Bulk Orders and Purchases, Connect with us:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" />
              <div className="flex flex-col">
                <a
                  href="tel:+919711480708"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  +91 9711480708
                </a>
                <a
                  href="tel:+919354902078"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  +91 9354902078
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" />
              <a
                href="mailto:unit27jeans@gmail.com"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                unit27jeans@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* 4. QR CODE & MAP */}
        <div>
          <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-[2px] mb-6">
            Locate Us
          </h3>

          {/* Map */}
          <div className="w-full h-[100px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 mb-4">
            <iframe
              src="https://www.google.com/maps?q=28.651577,77.183540&z=15&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              title="Unit 27 Location"
            ></iframe>
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-between border border-gray-200 dark:border-gray-800 p-3 rounded-lg bg-gray-50 dark:bg-[#151515]">
            <div>
              <p className="text-xs font-bold text-black dark:text-white uppercase">
                Scan Me
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                To connect instantly
              </p>
            </div>
            <img
              src="/qr.png"
              alt="QR Code"
              className="w-12 h-12 object-contain bg-white p-1 rounded"
            />
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 UNIT 27 — THE INDUSTRIAL STANDARD. All Rights Reserved.</p>
          <p>Proudly Developed by UNIT 27</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
