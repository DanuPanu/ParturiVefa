import React from 'react';
import Image from 'next/image';
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-white text-center p-4 relative">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[white]">Tervetuloa Vefalle!</h1>
        <p className="text-xl mb-8">Hiusten ja parran leikkausta ystävällisellä ammattitaidolla Espoossa</p>
        <p className="text-lg">Ota yhteyttä ja seuraa somessa!</p>
        <div className='flex justify-center items-center space-x-4 mt-4'>
          <div className='flex flex-row items-center gap-2'>
            <IoMailOutline />
            <p>Sähköposti</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <IoPhonePortraitOutline />
            <p>Puhelinnumero</p>
          </div>
        </div>

        {/* Add social media links */}
        <div className='flex justify-center items-center space-x-4 mt-4'>
          <a href="https://www.instagram.com/turkkilainenparturivefa?igsh=MXY2bG80Nzl0MjJzag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size="24" />
          </a>
          <a href="https://www.facebook.com/share/18bUrm19mA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size="24" />
          </a>
          <a href="https://www.tiktok.com/@turkkilainen.parturivefa?_t=ZN-8uS8KEJXKMA&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok size="24" />
          </a>
        </div>
      </div>
      <Image src="/images/shop2.jpg" layout="fill" objectFit="cover" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
    </section>
  );
};

export default Hero;