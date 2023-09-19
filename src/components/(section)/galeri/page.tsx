"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const imagesGaleri = [
  {
    id: 1,
    img: "/galeri/1.jpg",
  },
  {
    id: 2,
    img: "/galeri/2.jpg",
  },
  {
    id: 3,
    img: "/galeri/3.jpeg",
  },
  {
    id: 4,
    img: "/galeri/4.jpeg",
  },
  {
    id: 5,
    img: "/galeri/5.jpeg",
  },
  {
    id: 6,
    img: "/galeri/6.jpeg",
  },
];

const imagesNews = [
  {
    id: 1,
    img: "/news/news-1.jpeg",
  },
];

function Galeri() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 bg-dark">
      <div
        className="lg:w-1/4 w-full h-screen flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 text-main">
          News
        </h1>
        <Carousel>
          {imagesNews.map((item) => (
            <Image
              src={item.img}
              width={500}
              height={500}
              alt=""
              key={item.id}
              className="object-cover"
            />
          ))}
        </Carousel>
      </div>

      <div
        className="lg:w-1/4 w-full h-screen flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 text-main">
          Galeri
        </h1>
        <Carousel>
          {imagesGaleri.map((item) => (
            <Image
              src={item.img}
              width={500}
              height={500}
              alt=""
              key={item.id}
              className="object-cover"
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Galeri;
