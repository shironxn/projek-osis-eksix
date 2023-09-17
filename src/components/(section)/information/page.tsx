import React from "react";
import Image from "next/image";

function Information() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-5 bg-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl items-center justify-center">
        <div data-aos="fade-up" className="flex flex-col items-center">
          <Image
            src="/ketua-wakil/joyal.jpg"
            width={500}
            height={500}
            alt=""
            className="rounded shadow-xl"
          />
          <h1 className="text-center text-main text-4xl mt-4">
            Jovan & Firyal
          </h1>
        </div>

        <div>
          <div
            className="rounded-box p-6 text-center shadow-xl mb-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold my-6 text-main">Motto</h1>
            <p className="max-w-xl text-md leading-8 text-paragraph-200 text-justify">
              <span className="font-bold">BERSIKAP</span> Berani, Ekspresif,
              Responsif, Sopan, Inovatif, Kreatif, Aktif, Pedoman bagi seluruh
              siswa SMAN 48 Jakarta
            </p>
          </div>

          <div
            className="rounded-box p-6 text-center shadow-xl"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold my-6 text-main">
              Pesan Ketua dan Wakil OSIS
            </h1>
            <p className="max-w-xl text-md leading-8 text-paragraph-200 text-justify">
              Kami ingin OSIS SMA Negeri 48 Jakarta menjadi motivator dan
              menjadi cerminan bagi siswa/i untuk mencapai Visi dan Misi SMA
              Negeri 48 Jakarta. Melakukan praktek Sekolah Deklarasi
              Laboratorium Pancasila dengan mengamalkan norma-norma pancasila,
              SMART-G, dan membawa nama baik SMA Negeri 48 Jakarta ke posisi
              yang lebih unggul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
