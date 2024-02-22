import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   </>
  );
}
