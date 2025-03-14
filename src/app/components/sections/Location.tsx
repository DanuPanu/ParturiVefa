import React from 'react';

const Location: React.FC = () => {
  return (
    <section className='text-gray-800 pt-5'>
      <div className='text-center'>
        <h2 className="golden-base golden3 text-3xl font-semibold">Sijainti</h2>
      </div>
      <div className="flex flex-col justify-between items-center px-4">
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full h-96 pb-3"> {/* Increased height */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.018874406328!2d24.744346685313488!3d60.18720898990452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5490ee884c5%3A0x93665b6cdd64bf9!2sTurkkilainen%20parturi%20Vefa!5e0!3m2!1sfi!2sfi!4v1741163760509!5m2!1sfi!2sfi"
              width="100%"
              height="100%"
              allowFullScreen={false}
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg)", // Dark mode effect
              }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4 text-center flex flex-col">
          <h2 className="golden-base golden3 text-3xl font-semibold mb-2">Aukioloajat</h2>
          <div className="golden-base golden2 text-lg">
            <p>Maanantai - Perjantai: 9:00 - 18:00</p>
            <p>Lauantai: 9:00 - 15:00 </p>
            <p>Sunnuntai: Suljettu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;