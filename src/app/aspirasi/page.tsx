import React from "react";

function Aspirasi() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="flex flex-col w-full lg:flex-row gap-10">
        <div className="grid min-h-screen card bg-base-300 rounded-box place-items-center p-10">
          <h1 className="text-5xl font-bold text-center">
            Berikan Aspirasi Anda
          </h1>

          <form className="w-full">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Nama</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Aspirasi</span>
              </label>
              <textarea className="textarea textarea-bordered textarea-primary h-24"></textarea>
            </div>

            <div className="mt-6">
              <button className="btn btn-primary w-full">Kirim</button>
            </div>
          </form>
        </div>

        <div className="grid flex-grow min-h-screen card bg-base-300 rounded-box place-items-center text-2xl">
          ASPIRASI
        </div>
      </div>
    </div>
  );
}

export default Aspirasi;
