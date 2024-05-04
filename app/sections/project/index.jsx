import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider } from "components";
import Image from "next/image";
import cinemart from "../../../public/assets/images/cinemart.png";
import Link from "next/link";

export function ProjectsSection() {
	return (
		<LazyMotion features={domAnimation} className="">
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				{/* PROJECT LIST */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<div
						className="flex flex-col w-full my-5 md:my-8 lg:my-10 mx-auto rounded-md
				 border-2 border-emerald-300 hover:border-emerald-500 shadow-md p-5"
					>
						<p className="font-mono font-bold text-center text-xl">Cinemart</p>
						<Image
							className="mx-auto mt-5"
							src={cinemart}
							alt="cinemart"
							width={350}
							height={350}
						/>
						<div className="my-5 w-full mx-auto">
							<p className="font-sans font-semibold">
								A user-friendly film purchasing website using the TMDB’s free API and React Query
								for data management. It features shadcn/ui components for theme customization,
								carousel display, and pagination. Infinite scroll is implemented for smooth
								navigation. Firebase is used for authentication, allowing logins via Google and
								more.
							</p>
						</div>

						<div className="flex justify-evenly my-5">
							<Link href="https://github.com/dialkq/cinemart" target="_blank">
								<div
									className="font-mono bg-emerald-400 hover:bg-emerald-500 py-2 px-3 md:px-4 
							text-white font-bold rounded-md cursor-pointer"
								>
									Github
								</div>
							</Link>
							<Link href="https://cinemart.vercel.app/" target="_blank">
								<div
									className="font-mono bg-emerald-400 hover:bg-emerald-500 py-2 px-3 md:px-4
							text-white font-bold rounded-md cursor-pointer"
								>
									Demo
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
