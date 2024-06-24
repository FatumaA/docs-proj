interface Origin {
	name: string;
}

interface Location {
	name: string;
}

export interface Episode {
	id: string;
	name: string;
	air_date: string;
	episode: string;
	created: string;
	characters: Character[];
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

export interface CharacterResponse {
	data: {
		character: Character;
	};
}

export interface APIResponse {
	data: {
		characters: CharactersData;
	};
}
