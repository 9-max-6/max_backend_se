import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Edu from "@/components/Edu";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full m-auto sm:w-[426px] md:w-[540px] lg:w-[1000px] ">
        <section>
        <Navbar />
        </section>
        <section>
        <Hero />
        </section>
        <section className="py-2">
        <Edu />
        </section >
        <section  className="py-2">
        <Projects />
        </section>
        <section  className="py-2">
        <Skills />
        </section>
        <section  className="py-2">
          <Interests />
        </section>
      </main>
      <footer className="mt-auto h-[200px] w-full bg-primary gap-2 flex-wrap items-center justify-center">
        {/* add icons with links to my different social media pages */}
       
      </footer>
    </div>
  );
}
