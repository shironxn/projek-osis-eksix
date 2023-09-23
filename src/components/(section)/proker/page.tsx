import React from "react";
import Image from "next/image";
import Link from "next/link";

const proker = [
  {
    id: 1,
    img: "/images/tpas.svg",
    title: "TPAS (Tempat Penyaluran Aspirasi Siswa)",
    desc: {
      short:
        "Kami menggunakan situs web sebagai platform untuk Tempat Pengumpulan Aspirasi dan Saran (TPAS)",
      long: "Kami memilih situs web sebagai wadah utama untuk Tempat Pengumpulan Aspirasi dan Saran (TPAS) agar siswa dapat dengan mudah menyampaikan aspirasi, kritik, dan saran terkait kehidupan sekolah. Platform ini memungkinkan partisipasi aktif tanpa rasa takut, baik secara terbuka maupun anonim. Tujuan utama TPAS adalah menjadi dasar untuk merancang program yang lebih efektif dan sesuai dengan harapan siswa.",
    },
  },
  {
    id: 2,
    img: "/images/cfd.svg",
    title: "CheerFul Day (CFD)",
    desc: {
      short:
        "Kami menyelenggarakan hari di mana siswa dapat menyalurkan minat dan bakat kreatif mereka melalui rangkaian kegiatan seru yang kami selenggarakan.",
      long: "Hari dimana siswa dapat menuangkan minat dan bakat serta kreativitas-an nya pada hari tertentu, satu hari full melakukan rangkaian kegiatan acara seru seruan yang diadakan oleh kita, yang bertujuan agar siswa dapat menyalurkan kreativitas nya dihari tersebut dan semakin mengeratkan hubungan masyarakat SMAN 48 Jakarta.",
    },
  },
];

function Proker() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-5 bg-light">
      <div className="lg:w-1/2" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-main">
          Program Kerja
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {proker.map((item) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3"
            data-aos="fade-up"
            key={item.id}
          >
            <div className="bg-dark rounded-lg p-4 shadow-xl w-full h-full flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <Image src={item.img} width={500} height={500} alt="" />
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-heading-100">{item.title}</h2>
                <p className="text-paragraph-100 leading-8 text-justify">
                  {item.desc.short}
                </p>

                <label
                  htmlFor={item.title}
                  className="btn btn-ghost hover:bg-yellow-500 bg-main text-dark hover:scale-110"
                >
                  Details
                </label>

                <input
                  type="checkbox"
                  id={item.title}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box bg-dark text-paragraph-100">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="py-4 text-justify">{item.desc.long}</p>
                    <div className="modal-action">
                      <label
                        htmlFor={item.title}
                        className="btn hover:scale-110"
                      >
                        Close
                      </label>
                      {item.id === 1 && (
                        <label
                          htmlFor={item.title}
                          className="btn bg-main text-dark hover:bg-yellow-500 hover:scale-110"
                        >
                          <Link href={"/tpas"}>TPAS</Link>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proker;
