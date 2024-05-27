import Image from "next/image";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Mission from "./components/Mission";
import Store from "./components/Store";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="  flex min-h-screen flex-col items-center justify-between  ">

      <Hero />
      <Philosophy />
      <Mission />
      <Store/>
      <Footer/>

    </main>
  );
}
