"use client";

import React, { useState } from 'react';
import SwiperCarousel from '../components/ui/SwiperCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Footer from '../components/sections/Footer';

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const barberPictures = [
    { src: "/images/hair4.jpg"},
    { src: "/images/hair2.jpg"},
    { src: "/images/hair4.jpg"},
    { src: "/images/hair2.jpg"},
    { src: "/images/hair3.jpg"},
    { src: "/images/hair6.jpg"},
    { src: "/images/hair3.jpg"},
    { src: "/images/hair6.jpg"},
  ].map((image, index) => (
    <div key={index} className="image-container cursor-pointer h-70 w-40 xl:h-100 xl:w-75  md:h-90 md:w-65 sm:h-80" onClick={() => openModal(image.src)}>
      <Image src={image.src} width={300} height={300} objectFit="cover" alt={`Barber picture ${index + 1}`} />
    </div>
  ));

  const reviews = [
    { text: "Uskomattoman ystävällinen palvelu! Tämä parturiliike on ehdottomasti siistein ja mukavin, jossa olen ikinä käynyt. Sisustus ja ilmapiiri ovat todella lämminhenkisiä. Suosittelen lämpimästi!", author: "Ville" },
    { text: "I visited Turkkilainen parturi Vefa and was thoroughly impressed. The owner is a true professional; my haircut was executed flawlessly with great attention to detail. The salon&rsquo;s atmosphere is very welcoming and pleasant. The price-to-quality ratio is top-notch. I highly recommend it!", author: "Andre Pagi" },
    { text: "Erittäin hyvä ja miellyttävä kokemus. Todellinen ammattilainen, joka tekee laadukasta työtä. Päätin pysähtyä ajaessani ohi, kannatti! Menen varmasti uudestaan. 👍🏻", author: "JT" },
    { text: "Jos etsit hiusten ja parranleikkausten ammattilaista, Espon kaupungin korvaamatonta stylistiä, turkkilaista kampaajaa, jota et tule katumaan, tämän tulee ehdottomasti olla osoitteesi", author: "Hamdi Ordek" },
    { text: "Ystävällinen ja Ammattitaitoinen palvelu. Leikkaus juuri toiveiden mukaan. Suosittelen, Tulen käyttämään palveluita jatkossakin.", author: "Tony Öhman" },
    { text: "Elämäni paras parturi kokemus. Todella mukava ja ammattitaitoinen kaveri. Olin lähtiessä niin tyytyväinen että en pystynyt lopettamaan hymyilyä. :)", author: "Niko Mikanoja" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 bg-gray-100 text-gray-800">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="hover:text-gray-600 flex-1 flex items-center gap-2">
            <IoArrowBackCircleOutline size="32" /> Etusivu
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold text-center flex-grow flex-1">Galleria</h1>
          <div className="w-24 flex-1"></div> {/* Empty div to balance the layout */}
        </div>
        <section className="image_carousel mb-8 flex justify-center flex-col">
          <h2 className="text-2xl font-medium md:font-semi-bold mb-4 text-center">Inspiroidu</h2>
          <SwiperCarousel slides={barberPictures} spaceBetween={30} />
        </section>

        <section className="review-carousel mb-8">
          <h2 className="text-2xl font-medium md:font-semi-bold mb-4 text-center">Asiakkaiden kokemuksia</h2>
          <SwiperCarousel
            slides={reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <p className="text-base md:text-lg italic mb-4">{review.text}</p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm md:text-base font-medium md:font-semibold text-gray-700">- {review.author}</p>
              </div>
            ))}
            spaceBetween={10}
          />
        </section>

        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="relative w-3/4 h-3/4" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Enlarged" layout="fill" objectFit="contain" />
              <button
                className="absolute -top-4 -right-4 text-white text-2xl lg:text-3xl xl:text-4xl cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;