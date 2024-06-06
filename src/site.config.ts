import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Dizo",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "es-ES",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Meta property used as the default description meta property
	description: "An opinionated starter theme for Astro",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "es-ES",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "es_ES",
	// Option to sort posts by updatedDate if set to true (if property exists). Default (false) will sort by publishDate
	sortPostsByUpdatedDate: false,
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Astro Theme Cactus",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Índex",
	},
	{
		path: "/laberints/",
		title: "Laberints",
	},
	{
		path: "/mots_encreuats/",
		title: "Mots encreuats",
	},
	{
		path: "/sopa_lletres/",
		title: "Sopa de lletres",
	},
	{
		path: "/sudoku/",
		title: "Sudoku",
	},
	{
		path: "/buscamines/",
		title: "Buscamines",
	}
];

// Used to generate links in both the Header & Footer.
export const tipusPassatemps: { title: string; img: string; path: string; }[] = [
	{
		title: "Laberints",
		img: "img/laberint.png",
		path: "/laberints/",
	},
	{
		title: "Mots encreuats",
		img: "img/mots_encreuats.png",
		path: "/mots_encreuats/",
	},
	{
		title: "Sopa de lletres",
		img: "img/sopa_lletres.png",
		path: "/sopa_lletres/",
	},
	{
		title: "Sudoku",
		img: "img/sudoku.png",
		path: "/sudoku/",
	}
];

