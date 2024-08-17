import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-[560px_1fr]">
      <Sidebar />
      <Projects />
    </main>
  );
}
