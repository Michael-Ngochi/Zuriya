import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className=" border-primary border-t-4 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Zuriya Logo" className="h-20 w-20" />
{}            <span className="text-2xl font-serif">Zuriya</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Plant-powered skincare crafted with elegance and intention.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-secondary">About</a></li>
            <li><a href="/products" className="hover:text-secondary">Products</a></li>
            <li><a href="/rituals" className="hover:text-secondary">Rituals</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="/returns" className="hover:text-secondary">Returns & Refunds</a></li>
            <li><a href="/terms" className="hover:text-secondary">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-secondary">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-secondary">
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary  mt-6">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zuriya. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made in Nairobi, Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
