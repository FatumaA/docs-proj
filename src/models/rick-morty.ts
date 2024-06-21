export interface Character {
	id: string;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		dimension: string;
	};
	location: {
		name: string;
		dimension: string;
	};
	image: string;
	created: string;
}

export interface Episode {
	id: string;
	name: string;
	air_date: string;
	episode: string;
	created: string;
	characters: Character[];
}

export interface EpisodeResponse {
	data: {
		episodes: {
			results: Episode[];
		};
	};
}
