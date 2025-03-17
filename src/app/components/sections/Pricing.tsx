import React from 'react';
import Image from 'next/image';

const Pricing: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 mb-3 text-gray-800">
      <div className="flex flex-col w-full md:w-1/2 px-4 mb-5 text-center md:text-left">
        <h2 className="golden-base golden3 mb-4">Hinnasto</h2>
        <ul className="mb-4 golden-base golden2">
          <li className="mb-2 flex justify-between">
            <span>Parturileikkaus</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>25€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Hair & Beard</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>45€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Lasten Hiustenleikkuu</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>23€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Koneajo</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>20€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Mallinmuutosleikkaus</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>33€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Hiusten Pesu</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>3€</span>
          </li>
          <li className="mb-5 flex justify-between">
            <span>Päähieronta</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>15€</span>
          </li>

          <h2 className="golden-base goldenVali mb-3">Partapalvelut</h2>
          <li className="mb-2 flex justify-between">
            <span>Täyden palvelun parranajo</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>25€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Amerikkalainen parranajo</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>23€</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Korva ja nenä karvojen vahaus</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>10€</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <Image src="/images/vefaDumle.webp" alt="Placeholder" width={500} height={500} className="w-full h-auto max-h-[95vh] rounded" />
      </div>
    </section>
  );
};

export default Pricing;