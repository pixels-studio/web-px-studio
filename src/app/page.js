import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
