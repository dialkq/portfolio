import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider } from "components";

export function ProjectsSection() {
	return (
		<LazyMotion features={domAnimation} className="">
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />
					<h1 className="text-3xl">TESTING PAGE</h1>
				<div className="flex flex-col items-center gap-8 md:gap-14">	
				</div>
			</section>
		</LazyMotion>
	);
}
