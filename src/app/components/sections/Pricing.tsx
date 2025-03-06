import React from 'react';
import Image from 'next/image';

const Pricing: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-4 text-gray-800">
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4">Hinnasto</h2>
        <ul className="text-lg md:text-xl mb-4">
          <li className="mb-2 flex justify-between">
            <span>Hiusten leikkuu</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>$25</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Parran lyhennys</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>$15</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Parran ajo</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>$20</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Hiusten leikkuu ja parran lyhennys</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>$35</span>
          </li>
          <li className="mb-2 flex justify-between">
            <span>Hiusten leikkuu ja parran ajo</span>
            <span className="flex-grow border-dotted border-b border-gray-400 mx-2"></span>
            <span>$40</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <Image src="/images/parta.jpg" alt="Placeholder" width={500} height={500} className="w-full h-auto rounded shadow-md" />
      </div>
    </section>
  );
};

export default Pricing;