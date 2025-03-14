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
    { src: "/images/hiukset1.webp"},
    { src: "/images/hair4.webp"},
    { src: "/images/hiukset2.webp"},
    { src: "/images/hair2.webp"},
    { src: "/images/hiukset3.webp"},
    { src: "/images/hair6.webp"},
    { src: "/images/hiukset4.webp"},
    { src: "/images/hair3.webp"},
  ].map((image, index) => (
    <div key={index} className="image-container cursor-pointer" onClick={() => openModal(image.src)}>
      <Image style={{ objectFit: "cover" }}  className='rounded border-3 border-[#ffd90050]' src={image.src} width={300} height={300}  alt={`Barber picture ${index + 1}`} loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </div>
  ));

  const reviews = [
    { text: "Uskomattoman ystävällinen palvelu! Tämä parturiliike on ehdottomasti siistein ja mukavin, jossa olen ikinä käynyt. Sisustus ja ilmapiiri ovat todella lämminhenkisiä. Suosittelen lämpimästi!", author: "Ville" },
    { text: "I visited Turkkilainen parturi Vefa and was thoroughly impressed. The owner is a true professional; my haircut was executed flawlessly with great attention to detail. The salon&rsquo;s atmosphere is very welcoming and pleasant. The price-to-quality ratio is top-notch. I highly recommend it!", author: "Andre Pagi" },
    { text: "Erittäin hyvä ja miellyttävä kokemus. Todellinen ammattilainen, joka tekee laadukasta työtä. Päätin pysähtyä ajaessani ohi, kannatti! Menen varmasti uudestaan. 👍🏻", author: "JT" },
    { text: "Jos etsit hiusten ja parranleikkausten ammattilaista, Espon kaupungin korvaamatonta stylistiä, turkkilaista kampaajaa, jota et tule katumaan, tämän tulee ehdottomasti olla osoitteesi", author: "Hamdi Ordek" },
    { text: "Ystävällinen ja Ammattitaitoinen palvelu. Leikkaus juuri toiveiden mukaan. Suosittelen, Tulen käyttämään palveluita jatkossakin.", author: "Tony Öhman" },
    { text: "Elämäni paras parturi kokemus. Todella mukava ja ammattitaitoinen kaveri. Olin lähtiessä niin tyytyväinen että en pystynyt lopettamaan hymyilyä. :)", author: "Niko Mikanoja" },
    { text: "Todella asiallista toimintaa. Aamupäivän rauhalliseen aikaan jonottamatta tuoliin, tukka kuntoon ammattitaidolla, todella ystävällisen asiakaspalvelun kera. Voin suositella ja tulen käyttämään uudestaan tämän yrittäjän palvelua.", author: "Riku Summanen" },
    { text: "Vihdoin löytyi ammattilainen joka osaa leikata poikani erittäin paksun tukan, kiitos!", author: "Sari Vikström-Kivioja" },
    { text: "Vahva suositus paikalle. Palvelu oli nopeaa ja jälki erittäin hyvää!", author: "Leo Niemikallio" },
    { text: "Todella viihtyisä ympäristö. Omistaja on sympaattinen ja hiustenleikkaus oli laadukasta. Suosittelen jos haluaa laadukasta palvelua.", author: "Gevin Gul" },
    { text: "Loistavaa, nopeaa ja asiantuntevaa palvelua. Voin lämpimästi suositella kaikille!", author: "Olli Lohilahti" },
    { text: "Hiukset ja parta sai taas hetkeksi uuden ilmeen. Nenä ja korva karvatkin saivat kyytiä ja vaimo kiittää. Todella hyvä palvelu ja aito ammattilainen työssään. Kiitoksia! varmasti tulen käymään uudestaa.", author: "Nico Niuro" },
    { text: "Molemmat koululaispojat olivat erittäin tyytyväisiä (ovat käyneet monissa partureissa ja tänne seuraavankin kerran sanoivat). Parturi oli oikein ystävällinen. Leikkasi juuri molempien poikien toiveiden mukaisesti. Viihtyisä paikka. Ei mitään huonoa sanottavaa.", author: "Laura Vuolle" },
    { text: "On ollut paras parturi jota olen käyttänyt. Hinta-laatusuhde on erinomainen. Loistava tulos, nopeasti, ystävällisesti ja toivomuksen mukaisesti. Saat juuri sellaista tulosta jota halusit. Sijainti hyvä, ilmaista julkinen parkkipaikkakin löytyy ihan vastapäätä (4h kiekolla). Suosittelen!", author: "Markus Steinmiller" },
    { text: "Asiakaspalvelu oli erinomaista, palvelu nopeaa ilman ajanvarausta, erinomaista jälkeä!", author: "Niko Mäki" },
    { text: "Muutaman kerran olemme käyneet lasten kanssa hiuksia siistimässä ja itseltäni vahapoistettu nenä- ja korvakarvat. Palvelu on hyvää ja erittäin kohteliasta vaikka välillä joutui hetken odottamaankin. Monet paikat on nostaneet hintoja. Edullinen hinta-taso innosti kokeilemaan, sekä perheen teini kehui paikkaa. Käymme myös jatkossakin. Suosittelen lämpimästi. 5/5.", author: "Aulis T" },
    { text: "Erittäin mukava sekä ystävällinen palvelu. Joka kerta voi luottaa siihen , että saa juuri sellaista jälkeä kun haluaa ja voi lähteä iloisin mielin kotiin. Monissa paikoissa olen käynyt, mutta tämä erottuu selvästi joukosta! Suosittelen lämpimästi! 😊", author: "Miko Virtanen" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-4 bg-[#181818]">
        <div className="flex justify-between items-center">
            <Link href="/" className="hover:text-gray-600 flex-1 flex items-center gap-2">
            <IoArrowBackCircleOutline className="text-[#FFD700] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p className='golden-base golden2 text-sm sm:text-base md:text-lg lg:text-xl'>Etusivu</p>
            </Link>
            <h1 className="golden-base golden4 text-center flex-grow flex-1">Galleria</h1>
          <div className="w-24 flex-1"></div> {/* Empty div to balance the layout */}
        </div>
        <section className="image_carousel mb-8 flex justify-center flex-col">
          <SwiperCarousel slides={barberPictures} spaceBetween={30} />
        </section>

        <section className="review-carousel">
          <div className='text-center'>
            <h2 className="golden-base golden3 text-2xl font-medium md:font-semi-bold mb-4 text-center">Asiakkaiden kokemuksia</h2>
          </div>
          <SwiperCarousel
            slides={reviews.map((review, index) => (
              <div key={index} className="bg-[#fafafa10] p-4 rounded-lg flex flex-col items-center">
                <p className="text-white md:text-lg italic mb-4">{review.text}</p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm md:text-base font-medium md:font-semibold text-white">- {review.author}</p>
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