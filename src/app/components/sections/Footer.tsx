import Link from 'next/link';
import React from 'react';
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#312F2F] text-white w-full mt-auto">
      <div className="text-sm flex gap-1 justify-center items-center">
        <Link href="/">
          <FaPhone color='#FFD700' size={24}/>
        </Link>
         <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/images/instagram.png" width={55} height={55} alt="Instagram" />
          </a>
        <p className='golden-base goldenFooter'>Tervetuloa Vefalle!</p>
          <a href="https://www.facebook.com/share/18bUrm19mA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Image src="/images/facebook.png" width={42} height={42} alt="#"/>
          </a>
          <a href="https://www.tiktok.com/@turkkilainen.parturivefa?_t=ZN-8uS8KEJXKMA&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <Image src="/images/tiktok.png" width={55} height={55} alt="#"/>
          </a>
      </div>
    </footer>
  );
};

export default Footer;