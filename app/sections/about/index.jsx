"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";
import Image from "next/image";
import profilePic from "public/assets/images/photo_dwi.png";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<Image
							className="block md:order-1 mx-auto md:mx-0"
							src={profilePic}
							alt="Profile picture"
							width={250}
							height={250}
						/>
						<p className="mb-10 md:order-2">
							Hello, my name is <span className="font-bold">Dwi Abdul Kholiq</span> , a passionate
							and dedicated Front-End Developer based in Tangsel. Although I am yet to gain
							professional experience, I have honed my skills to a level comparable to a Junior
							Front-End Developer. I am proficient in modern web technologies and have a solid
							understanding of how to create user-friendly interfaces that are both functional and
							visually appealing. I am also fluent in English, which allows me to communicate
							effectively in diverse teams and with international clients. I am a quick learner,
							always eager to absorb new knowledge and improve my skills. I am highly motivated and
							ready to dedicate my full time and energy to contribute to the success of your
							company. I believe that my strong technical skills, combined with my dedication and
							work ethic, will make me a valuable asset to your team. I am excited about the
							opportunity to bring fresh ideas, new perspectives, and a diversity of experiences to
							your company. I am confident that my unique attributes will enable me to thrive, add
							value to your team, and help me stand out as a candidate.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
