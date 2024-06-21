import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "",
			logo: {
				src: "./src/assets/logo.png",
			},
			social: {
				github: "https://github.com/FatumaA/docs-proj",
			},
			sidebar: [
				{ label: "Overview", link: "/docs" },
				{
					label: "Guides",
					autogenerate: { directory: "docs/guides" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "docs/reference" },
				},
			],
		}),
	],
});
