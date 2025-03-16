import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Info: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 mb-3">
      <div className="order-1 md:order-2 w-full md:w-1/2 p-4 text-center">
        <h2 className="golden-base golden3">Meistä</h2>
        <p className="golden-base golden2 text-left">
        Olemme perinteinen turkkilainen parturi Espoon Suurpellossa, jossa yhdistyvät laadukas käsityö, rento ilmapiiri ja aito asiakaspalvelu. <br/> <br/>
        Palveluihimme kuuluvat miesten hiustenleikkaus ja pesu, parran muotoilu sekä korva-, nenä- ja poskikarvojen poisto - kaikki ilman ajanvarausta. Meillä pääset aina nopeasti tuoliin, ja saat huolellisesti viimeistellyn lopputuloksen. <br/> <br/>
        Teen työtä tinkimättömällä ammattitaidolla ja intohimolla, ja minulle on kunnia-asia, että viihdyt liikkeessäni ja lähdet tyytyväisenä joka kerta. <br/> <br/>
        Selaa kuvia ja asiakkaiden kokemuksia galleriasta!   
        </p>
        <Link href="/gallery" className='inline-block px-6 py-2 my-3 text-white bg-[#312F2F] rounded hover:bg-[#474646] md:px-12 md:py-3 md:text-xl lg:text-2xl'>Galleria</Link>
      </div>
      <div className="order-2 md:order-1 w-full md:w-1/2 px-4">
        <Image src="/images/mestari.webp" alt="Placeholder" width={500} height={500} className="w-full h-auto max-h-[95vh] rounded" />
      </div>
    </section>
  );
};

export default Info;