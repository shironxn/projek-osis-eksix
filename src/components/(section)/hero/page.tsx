import React from "react";

function Hero() {
  return (
    <section>
      <div
        className="hero min-h-screen bg-cover bg-bottom"
        style={{
          backgroundImage: "url(galeri/1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-heading-100">
          <div className="max-w-xxl">
            <h1 className="mb-5 text-8xl font-bold">OSIS SMAN 48</h1>
            <p className="mb-5 text-lg md:text-xl font-bold">
              Periode 2023-2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
