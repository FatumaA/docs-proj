interface Origin {
	name: string;
}

interface Location {
	name: string;
}

interface Episode {
	id: string;
	name: string;
	air_date: string;
	episode: string;
	created: string;
}

export interface Character {
	id: string;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: string;
	episode: Episode[];
	created: string;
}

export interface CharactersData {
	results: Character[];
}

export interface APIResponse {
	data: {
		characters: CharactersData;
	};
}
