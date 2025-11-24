import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/bilicdhallan logo.jpg";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* COMPANY INFO */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-3">
            <img className="w-[40px] h-[40px] rounded-full" src={Logo} alt="Logo" />
            <h1 className="text-blue-500 font-bold text-xl">
              <span className="text-green-300 font-extrabold">Baby</span> Shop
            </h1>
          </div>
          <p className="text-sm leading-6">
            Bilic Dhallaan waa showroom loogu talagalay dharka, toys-ka iyo alaabaha caruurta.
            Waxaan bixinaa tayo sare, naqshad qurux badan, iyo adeeg daacad ah oo loogu talagalay
            waalidiinta iyo ilmahooda.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/Cars" className="hover:text-green-400 transition">Cars</a></li>
            <li><a href="/BoysUnderage" className="hover:text-green-400 transition">Boys</a></li>
            <li><a href="/GirlsNewborn" className="hover:text-green-400 transition">Girls</a></li>
            <li><a href="/Babyfurniture" className="hover:text-green-400 transition">Baby Furniture</a></li>
            <li><a href="/Babyshower" className="hover:text-green-400 transition">Baby Shower</a></li>
            <li><a href="/ContactUs" className="hover:text-green-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm mb-3">📍 Happy Town, Somalia</p>
          <p className="text-sm mb-3">📞 +252 619355029</p>
          <p className="text-sm mb-4">📧 info@bilic-dhallaan.com</p>

          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/qaalidi.haweenka" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaTwitter /></a>
            <a href="https://wa.me/252619355029" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Bilic Dhallaan Baby Shop — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
