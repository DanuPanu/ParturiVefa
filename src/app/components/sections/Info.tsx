import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4">
      <div className="order-1 md:order-2 w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="golden-base golden3 text-3xl font-semibold mb-4">Minusta</h2>
        <p className="golden-base golden2 text-lg md:text-xl mb-2">
          Turkkilainen parturi Espoon Suurpellossa. Palveluistamme löydät miesten hiusten leikkuun, hiusten pesun, parran muotoilun sekä korva-, nenä- ja poskikarvojen poiston. Palvelumme perustuu laatuun ja asiakaslähtöisyyteen. <br/> <br/>
          Tarjoan korkealaatuisia parturipalveluja hiustenleikkuusta parran trimmaukseen Espoon Suurpellossa. Teen työtä tinkimättömällä ammattitaidolla ja intohimolla. Minulle on kunnia-asia, että viihdyt liikkeessäni ja lähdet tyytyväisenä, joka kerta. <br/> <br/>
          Selaa hiustyylejä ja asiakaspalautteita galleriasta!   
        </p>
        <Link href="/gallery" className='inline-block px-6 py-2 mt-5 text-[#FFD700] bg-black border border-[#FFD700] rounded hover:bg-brown-700 text-base md:px-8 md:py-3 md:text-xl'>Galleria</Link>
      </div>
      <div className="order-2 md:order-1 w-full md:w-1/2 p-4">
        <Image src="/images/mestari.jpg" alt="Placeholder" width={500} height={500} className="w-full h-auto rounded shadow-md" />
      </div>
    </section>
  );
};

export default Info;