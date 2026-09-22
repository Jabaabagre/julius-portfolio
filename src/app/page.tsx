import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header variant="home" />
      <main id="top" className="relative z-[1]" />
      <Footer />
    </>
  );
}
