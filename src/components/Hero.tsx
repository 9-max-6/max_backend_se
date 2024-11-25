import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
	return (
		<div className="my-12 md:flex justify-start gap-12">
			<div className="py-12 flex-1">
				<h4 className="scroll-m-20 text-xl tracking-tight">
					Hi, I'm
				</h4>
				<h1 className="hero scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Maxwell Mutuku
				</h1>
				<h4 className="scroll-m-20 text-xl tracking-tight">
					A backend software engineer with skills in <span>Golang</span>, <span>Javascript</span>, and <span>Python</span>. I have a passion for building scalable and secure web applications
				</h4>
				<div className="my-4 flex gap-2">

					<Button>
						Hire me
					</Button>
					<Button variant='secondary'>
						Projects
					</Button>
				</div>
			</div>
			<div className="relative">
				<Image
					src="/hero.png"
					width={300}
					height={300}
					alt="Picture of the hero"
					className="rounded-full"
				/>


			</div>

		</div>
	)
}

export default Hero