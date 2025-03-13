import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoPhonePortraitOutline } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center p-4 bg-[#312F2F] text-white w-full mt-auto">
      <div className="text-sm flex gap-2 items-center">
        <Link href="/" className='flex gap-2 items-center'>
          <IoPhonePortraitOutline size={24}/>
        </Link>
         <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size="24" />
          </a>
        <p>Tervetuloa Vefalle!</p>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size="24" />
          </a>
          <a href="https://www.tiktok.com/@turkkilainen.parturivefa?_t=ZN-8uS8KEJXKMA&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok size="24" />
          </a>
      </div>
    </footer>
  );
};

export default Footer;