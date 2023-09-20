import React from "react";

function VisiMisi() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-5 bg-dark">
      <div className="lg:w-1/2 flex flex-col text-paragraph-200">
        <div
          data-aos="fade-up"
          className="text-4xl font-bold mb-4 text-center lg:text-left text-main"
        >
          Visi
        </div>
        <div data-aos="fade-up" className="bg-light rounded-md p-5">
          <p className="text-md leading-8 text-justify text-paragraph-200">
            Mewujudkan SMA Negeri 48 Jakarta menjadi sekolah yang unggul dan
            menjadikan para siswa/i menjadi siswa/i yang berprestasi, kreatif,
            aktif, asik, inovatif, profesional, berpikiran maju dan terbuka,
            berakhlak mulia dan taat pada norma-norma Pancasila.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="mt-6 text-4xl font-bold mb-4 text-center lg:text-left text-main"
        >
          Misi
        </div>
        <div
          className="bg-light text-paragraph-200 leading-8 rounded-lg p-5 text-md"
          data-aos="fade-up"
        >
          <ul className="list-disc pl-5">
            <li>
              Meningkatkan keimanan dan ketaqwaan terhadap Tuhan yang maha esa.
            </li>
            <li>
              Menciptakan lingkungan yang nyaman dan aman bagi peserta didik.
            </li>
            <li>
              Mengembangkan tanggung jawab, rasa sosial, dan sikap menghargai
            </li>
            <li>
              Mendukung lingkungan sekolah yang ramah lingkungan, dengan
              mengajak siswa untuk aktif dalam menjaga kebersihan sekolah dan
              mengedukasi tentang pentingnya menjaga lingkungan.
            </li>
            <li>
              Meningkatkan kerjasama antara siswa, guru, dan orangtua dalam
              upaya menciptakan lingkungan belajar yang harmonis.
            </li>
            <li>
              Mengajak siswa untuk aktif berpartisipasi dalam kegiatan sekolah,
              seperti acara olahraga, kebudayaan, akademik, ekstrakurikuler, dan
              sosial.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;
