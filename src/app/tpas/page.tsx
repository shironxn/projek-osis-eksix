"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import dataTPAS from "@/types/tpas.type";
import AOSComponent from "@/components/Aos";

function Aspirasi() {
  const [tpasData, setTpasData] = useState<dataTPAS[]>([]);

  const fetchData = async () => {
    const response = await axios.get("/api/tpas");
    const tpasArray = Object.keys(response.data.data).map((key) => ({
      id: key,
      ...response.data.data[key],
    }));
    setTpasData(tpasArray.reverse());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { name, message } = e.target;
    const requestData: dataTPAS = {
      name: name.value,
      message: message.value,
    };

    try {
      const response: AxiosResponse<any, any> = await axios.post(
        "/api/tpas",
        requestData
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AOSComponent>
      <div className="flex flex-col min-h-screen bg-dark p-5">
        <section className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-main mb-8">
            Tempat Penyaluran Aspirasi Siswa
          </h1>

          <div className="mt-8">
            <Image src={"/images/tpas.svg"} width={800} height={800} alt="" />
          </div>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center">
          <div className="m-auto mb-6" data-aos="fade-up">
            <h1 className="font-bold text-main text-4xl md:text-6xl text-center">
              Salurkan Aspirasi Anda
            </h1>
          </div>

          <div
            className="w-full md:w-1/2 h-64 overflow-y-scroll bg-base-300 rounded-lg text-left text- xl mb-6 p-4 space-y-5"
            data-aos="fade-up"
          >
            {Array.isArray(tpasData) &&
              tpasData.map((item: dataTPAS, i: number) => (
                <div className="w-full rounded-md bg-dark p-5" key={i}>
                  {item && (
                    <>
                      Nama: {item.name}
                      <br />
                      Pesan: {item.message}
                      <br />
                      Waktu: {item.timestamp && formatTimestamp(item.timestamp)}
                    </>
                  )}
                </div>
              ))}
          </div>

          <form
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="mb-6 w-full" data-aos="fade-up">
              <label className="label">
                <span className="label-text text-lg text-heading-100">
                  Nama
                </span>
                <span className="label-text-alt text-paragraph-100">
                  [opsional]
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered input-ghost focus:border-main bg-transparent w-full text-paragraph-100"
              />
            </div>
            <div className="mb-6 w-full" data-aos="fade-up">
              <label className="label">
                {" "}
                <span className="label-text text-lg text-heading-100">
                  Pesan
                </span>
              </label>

              <textarea
                className="textarea textarea-ghost textarea-bordered focus:border-main bg-transparent h-24 w-full text-paragraph-100"
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            <div className="mb-6 w-full m-auto text-center" data-aos="fade-up">
              <button className="btn btn-ghost hover:bg-yellow-500 bg-main text-dark w-full">
                Kirim
              </button>
            </div>
          </form>
        </section>
      </div>
    </AOSComponent>
  );
}

export default Aspirasi;
