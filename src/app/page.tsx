import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-8 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Navbar />
      </main>
      <footer className=" flex gap-2 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
