"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import dataTPAS from "@/types/tpas.type";

function Aspirasi() {
  const [tpasData, setTpasData] = useState<dataTPAS[]>([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/tpas");
    const tpasArray = Object.keys(response.data.data).map((key) => ({
      id: key,
      ...response.data.data[key],
    }));
    setTpasData(tpasArray.reverse());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { nama, aspirasi } = e.target;
    const requestData: dataTPAS = {
      name: nama.value,
      aspiration: aspirasi.value,
    };

    try {
      const response: AxiosResponse<any, any> = await axios.post(
        "http://localhost:3000/api/tpas",
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
        <div className="m-auto">
          <h1 className="font-bold text-main text-4xl md:text-6xl text-center">
            Salurkan Aspirasi Anda
          </h1>
        </div>

        <div className="w-full md:w-1/2 h-64 overflow-y-scroll bg-base-300 rounded-lg text-left text- xl mb-4 p-4 space-y-5">
          {Array.isArray(tpasData) &&
            tpasData.map((item: dataTPAS, i: number) => (
              <div className="w-full rounded-md bg-dark p-5" key={i}>
                {item && (
                  <>
                    Nama: {item.name}
                    <br />
                    Aspirasi: {item.aspiration}
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
          <div className="mb-4 w-full">
            <label className="text-lg text-heading-100">Nama</label>
            <input
              type="text"
              name="nama"
              id="name"
              className="input input-bordered input-ghost focus:border-main bg-transparent w-full"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="text-lg text-heading-100">Aspirasi</label>

            <textarea
              className="textarea textarea-ghost textarea-bordered focus:border-main bg-transparent h-24 w-full"
              name="aspirasi"
              id="aspirasi"
            ></textarea>
          </div>
          <div className="mt-6 w-full m-auto text-center">
            <button className="btn btn-ghost hover:bg-yellow-500 bg-main text-dark w-full">
              Kirim
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Aspirasi;
