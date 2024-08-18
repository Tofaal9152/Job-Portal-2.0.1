import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">JobPortal</h3>
            <p className="text-gray-400">
              Your gateway to the latest job opportunities and career growth.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <div className="text-gray-300 hover:text-white">Home</div>
                  </Link>
                </li>
                <li>
                  <Link href="/jobs">
                    <div className="text-gray-300 hover:text-white">Jobs</div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div className="text-gray-300 hover:text-white">About Us</div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div className="text-gray-300 hover:text-white">Contact</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <ul className="flex space-x-4">
                <li>
                  <Link href="https://twitter.com" passHref>
                    <div className="text-gray-300 hover:text-white flex items-center">
                      <FaTwitter className="w-6 h-6" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" passHref>
                    <div className="text-gray-300 hover:text-white flex items-center">
                      <FaLinkedin className="w-6 h-6" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com" passHref>
                    <div className="text-gray-300 hover:text-white flex items-center">
                      <FaFacebook className="w-6 h-6" />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
