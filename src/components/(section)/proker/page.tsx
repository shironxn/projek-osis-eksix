import React from "react";
import Image from "next/image";

const proker = [
  {
    img: "",
    title: "TPAS (Tempat Penyaluran Aspirasi Siswa)",
    desc: "Kita menggunakan web sebagai media untuk TPAS agar siswa/i dapat menyalurkan aspirasi, kritik, dan saran, bisa dengan identitas maupun tanpa identitas (anonymous). TPAS ini bisa membantu OSIS untuk berkembang kedepannya (bertujuan untuk mengevaluasi kinerja).",
  },
  {
    img: "",
    title: "CheerFul Day (CFD)",
    desc: "Dimana hari bahwa siswa menuangkan minat dan bakat ke kreativitas-an nya pada hari tertentu, satu hari full melakukan rangkaian kegiatan acara seru seruan yang diadakan oleh kita, yang bertujuan agar siswa dapat menyalurkan kreativitas nya dihari tersebut dan semakin mengeratkan hubungan masyarakat SMAN 48 Jakarta.",
  },
];

function Proker() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-5 bg-light">
      <div className="lg:w-1/2" data-aos="fade-up">
        <h1 className="text-6xl font-bold text-center mb-8 text-main">
          Program Kerja
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10" data-aos="fade-up">
        {proker.map((item, i) => (
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4" key={i}>
            <div className="bg-dark rounded-lg p-4 shadow-xl">
              <figure className="text-center">
                <Image src={item.img} width={300} height={300} alt=""></Image>
              </figure>

              <div className="text-center">
                <h2 className="text-xl font-bold mb-2 text-heading-100">
                  {item.title}
                </h2>
                <p className="text-paragraph-100 leading-8 text-justify">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proker;
