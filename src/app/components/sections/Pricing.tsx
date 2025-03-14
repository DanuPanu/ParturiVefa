import React from 'react';
import Image from 'next/image';

const Pricing: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-4 text-gray-800">
      <div className="golden-base golden2 w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="golden-base golden3 text-3xl font-semibold mb-4">Hinnasto</h2>
        <ul className="text-lg md:text-xl mb-4">
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
          <li className="mb-2 flex justify-between">
            <span>Päähieronta</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>15€</span>
          </li>
          <h2 className="golden-base golden3 text-3xl font-semibold mb-4 mt-4">Partapalvelut</h2>
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
        <Image src="/images/vefaDumle.jpg" alt="Placeholder" width={500} height={500} className="w-full h-auto rounded shadow-md" />
      </div>
    </section>
  );
};

export default Pricing;