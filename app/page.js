"use client";
// eslint-disable-next-line no-unused-vars
import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			{/* <ProjectsSection /> */}
			<TechnologiesSection />
		</div>
	);
}
