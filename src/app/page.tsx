"use client";

import Galeri from "@/components/(section)/galeri/page";
import Hero from "@/components/(section)/hero/page";
import Information from "@/components/(section)/information/page";
import Proker from "@/components/(section)/proker/page";
import VisiMisi from "@/components/(section)/visi-misi/page";
import AOSComponent from "@/components/Aos";

export default function Home() {
  return (
    <AOSComponent>
      <Hero />
      <Information />
      <VisiMisi />
      <Proker />
      <Galeri />
    </AOSComponent>
  );
}
