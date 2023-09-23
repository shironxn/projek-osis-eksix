"use client";

import dataTPAS from "@/types/tpas.type";
import axios, { AxiosResponse } from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useCallback, useState } from "react";

const Form = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const target = e.target as typeof e.target & {
        name: { value: string };
        message: { value: string };
      };

      const requestData: dataTPAS = {
        name: target.name.value,
        message: target.message.value,
      };

      try {
        const recaptchaToken = await executeRecaptcha("form_submit");

        if (recaptchaToken) {
          await axios.post("/api/tpas", {
            data: requestData,
            token: recaptchaToken,
          });

          window.location.reload();
        }
      } catch (error: any) {
        setError(error.response.data.error);
      }
    },
    [executeRecaptcha]
  );

  return (
    <>
      <form
        className="w-full md:w-1/2 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-6 w-full" data-aos="fade-up">
          <label className="label">
            <span className="label-text text-lg text-heading-100">Nama</span>
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
            <span className="label-text text-lg text-heading-100">Pesan</span>
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

        {error && (
          <div className="alert alert-error" data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
