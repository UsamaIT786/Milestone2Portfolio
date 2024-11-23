import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footers from "@/components/Footers";
export default function Home() {
  return (

    <main>

<Navbar />
<Hero />
<About />
<Contact />
<Gallery />
<Footers />




    </main>

  );
}
