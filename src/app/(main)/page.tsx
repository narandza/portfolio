import { About } from "./about";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Services } from "./services";

export default function HomePage() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
}
