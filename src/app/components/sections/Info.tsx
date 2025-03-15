import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 mb-3">
      <div className="order-1 md:order-2 w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="golden-base golden3">Meistä</h2>
        <p className="golden-base golden2 text-lg md:text-xl">
        Olemme perinteinen turkkilainen parturi Espoon Suurpellossa, jossa yhdistyvät laadukas käsityö, rento ilmapiiri ja aito asiakaspalvelu. <br/> <br/>
        Palveluihimme kuuluvat miesten hiustenleikkaus ja pesu, parran muotoilu sekä korva-, nenä- ja poskikarvojen poisto - kaikki ilman ajanvarausta. Meillä pääset aina nopeasti tuoliin, ja saat huolellisesti viimeistellyn lopputuloksen. <br/> <br/>
        Teen työtä tinkimättömällä ammattitaidolla ja intohimolla, ja minulle on kunnia-asia, että viihdyt liikkeessäni ja lähdet tyytyväisenä joka kerta. Haluan tarjota paitsi hyvän hiustenleikkuun, myös miellyttävän kokemuksen, johon on mukava palata. <br/> <br/>
        Selaa hiustyylejä ja asiakaspalautteita galleriasta!   
        </p>
        <Link href="/gallery" className='inline-block px-6 py-2 my-3 text-[#FFD700] bg-black border border-[#FFD700] rounded hover:bg-brown-700 text-base md:px-8 md:py-3 md:text-xl'>Galleria</Link>
      </div>
      <div className="order-2 md:order-1 w-full md:w-1/2 px-4">
        <Image src="/images/mestari.webp" alt="Placeholder" width={500} height={500} className="w-full h-auto max-h-[95vh] rounded" />
      </div>
    </section>
  );
};

export default Info;