import Link from 'next/link';
import React from 'react';
import { FaPhone, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#312F2F] text-white w-full mt-auto">
      <div className="text-center">
        <p className='golden-base goldenFooter'>Tervetuloa Vefalle!</p>
      </div>
    </footer>
  );
};

export default Footer;