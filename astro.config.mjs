import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
				// "./src/tailwind.css",
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
				{
					label: "Reference",
					autogenerate: {
						directory: "docs/reference",
					},
				},
			],
		}),
		tailwind(),
	],
});
