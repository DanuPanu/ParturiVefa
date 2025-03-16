import React from 'react';
import Image from 'next/image';
import { FaPhone } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-white text-center relative mb-3">
      <div className="relative z-10">
        <h1 className="golden-base golden4">Tervetuloa Vefalle!</h1> <br/>
        <p className="golden-base golden2">Hiusten ja parran leikkausta ystävällisellä ammattitaidolla Espoossa</p> <br/>
        <p className="golden-base golden2">Ota yhteyttä ja seuraa somessa!</p>
        <div className='flex justify-center items-center space-x-4 mt-4'>
            <FaPhone size="24" color='white'/>
            <p className='golden-base golden2'>+358 44 2435821</p>
        </div>

        {/* Add social media links */}
        <div className='flex justify-center items-center space-x-2 mt-4'>
          <a href="https://www.instagram.com/turkkilainenparturivefa?igsh=MXY2bG80Nzl0MjJzag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/images/instagram.png" width={60} height={60} alt="#"/>
          </a>
          <a href="https://www.facebook.com/share/18bUrm19mA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Image src="/images/facebook.png" width={42} height={42} alt="#"/>
          </a>
          <a href="https://www.tiktok.com/@turkkilainen.parturivefa?_t=ZN-8uS8KEJXKMA&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <Image src="/images/tiktok.png" width={60} height={60} alt="#"/>
          </a>
        </div>
      </div>
      <Image src="/images/vefaShop2.webp" layout="fill" objectFit="cover" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px]" />
    </section>
  );
};

export default Hero;