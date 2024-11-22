import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="m-12 md:flex gap-12">
        <div>
            <Image
                src="/hero.jpg"
                width={200}
                height={200}
                alt="Picture of the hero"
            />
        </div>
        <div className="p-12 flex-1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Hi, I'm
    </h4>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Maxwell Mutuku
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      A backend software engineer with skills in <span>Golang</span>, <span>Javascript</span>, and <span>Python</span>
    </h4>
    <Button className="my-4">
        Hire me
    </Button>
        </div>
    </div>
  )
}

export default Hero