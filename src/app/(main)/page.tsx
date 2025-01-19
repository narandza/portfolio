"use client";

import { Work } from "./work";
import { About } from "./about";
import { Header } from "./header";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Contact } from "./contact";
import { Services } from "./services";

export default function HomePage() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
