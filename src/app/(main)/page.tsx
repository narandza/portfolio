import { About } from "./about";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Services } from "./services";
import { Work } from "./work";

export default function HomePage() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
    </div>
  );
}
