"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import dataTPAS from "@/types/tpas.type";
import AOSComponent from "@/components/Aos";

import Providers from "@/components/Providers";
import Form from "@/components/Form";

function Tpas() {
  const [tpasData, setTpasData] = useState<dataTPAS[] | string>([]);

  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get("/api/tpas");
      const tpasArray = Object.keys(response.data.data).map((key) => ({
        id: key,
        ...response.data.data[key],
      }));
      setTpasData(tpasArray.reverse());
    } catch (error: any) {
      setTpasData("Error getting data");
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Providers>
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
              {typeof tpasData === "string" ? (
                <p>{tpasData}</p>
              ) : (
                Array.isArray(tpasData) &&
                tpasData.map((item: dataTPAS, i: number) => (
                  <div
                    className="w-full rounded-md bg-dark text-paragraph-100 p-5"
                    key={i}
                  >
                    {item && (
                      <>
                        Nama: {item.name}
                        <br />
                        Pesan: {item.message}
                        <br />
                        Waktu:{" "}
                        {item.timestamp && formatTimestamp(item.timestamp)}
                      </>
                    )}
                  </div>
                ))
              )}
            </div>
            <Form />
          </section>
        </div>
      </AOSComponent>
    </Providers>
  );
}

export default Tpas;
