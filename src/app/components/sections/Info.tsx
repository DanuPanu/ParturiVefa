import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 text-gray-800">
      <div className="order-1 md:order-2 w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4">Minusta</h2>
        <p className="text-lg md:text-xl mb-2">
          Tarjoan korkealaatuisia parturipalveluja hiustenleikkuusta parran trimmaukseen. Teen työtä tinkimättömällä ammattitaidolla ja intohimolla. Minulle on kunnia-asia, että viihdyt liikkeessäni ja lähdet tyytyväisenä joka kerta!
        </p>
        <p className="text-lg md:text-xl mb-2">
          Käytän vain parhaita tuotteita ja välineitä varmistaakseni, että saat parhaan mahdollisen palvelun. Olipa kyseessä hiustenleikkaus, parranajo tai muu parturipalvelu, voit luottaa siihen, että saat huolellista ja ammattitaitoista palvelua.
        </p>
        <p className='text-lg md:text-xl'>Selaa hiustyylejä ja asiakaspalautteita galleriasta!</p>
        <Link href="/gallery" className='inline-block px-6 py-2 mt-5 text-white bg-black rounded hover:bg-brown-700 text-base md:px-8 md:py-3 md:text-xl'>Galleria</Link>
      </div>
      <div className="order-2 md:order-1 w-full md:w-1/2 p-4">
        <Image src="/images/leikkaus.jpg" alt="Placeholder" width={500} height={500} className="w-full h-auto rounded shadow-md" />
      </div>
    </section>
  );
};

export default Info;