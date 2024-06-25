import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	image: {
		remotePatterns: [
			{
				protocol: "https",
			},
		],
	},
	output: "server",
	adapter: netlify(),
	integrations: [
		starlight({
			title: "",
			logo: {
				src: "./src/assets/logo.png",
				replacesTitle: true,
			},
			social: {
				github: "https://github.com/FatumaA/docs-proj",
			},
			customCss: [
				// Path to your Tailwind base styles:
				"./src/tailwind.css",
				"./src/assets/landing.css",
				"@fontsource/nunito-sans/400.css",
				"@fontsource/nunito-sans/600.css",
			],
			sidebar: [
				{
					label: "Overview",
					link: "/docs",
				},
				{
					label: "Guides",
					autogenerate: {
						directory: "docs/guides",
					},
				},
				// {
				// 	label: "Reference",
				// 	autogenerate: {
				// 		directory: "docs/reference",
				// 	},
				// },
			],
		}),
		tailwind(),
		icon(),
		react({
			experimentalReactChildren: true,
		}),
	],
	//   react({
	//     experimentalReactChildren: true
	//   })],
	vite: {
		ssr: {
			noExternal: ["react-icons"],
		},
	},
});
