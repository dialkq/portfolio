const author = "Dwi Abdul kholiq";
const description = "convert YOUR digital vision into reality";
const url = "https://dialkq.com";
export const AppMetadata = {
	metadataBase: new URL("https://dialkq.com"),
	title: {
		default: `Portfolio | ${author}`,
		template: `${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Dwi Abdul kholiq",
		"Dwi Abdul kholiq - software developer",
		"Frontend developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		type: "website"
	}
};
