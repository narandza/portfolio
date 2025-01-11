import { Header } from "./header";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Header />
    </div>
  );
}
