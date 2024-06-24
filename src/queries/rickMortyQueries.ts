export const getAllCharactersQuery = `
      query GetAllCharacters {
          characters {
              results {
                id
                name
                status
                species
                type
                gender
                origin {
                  name
                }
                location {
                  name
                }
                image
                episode {
                  id
                  name
                  air_date
                  episode
                  created
                }
                created
              }
          }
      }
`;

export const getOneCharacterQuery = `
      query GetOneCharacterDeets($id: ID!) {
        character(id: $id) {
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            id
            name
            air_date
            episode
            created
            characters {
              id
              name
              status
              species
              type
              gender
              origin {
                name
                dimension
              }
              location {
                name
                dimension
              }
              image
              created
            }
          }
          created
        }
      }
    `;

export const getAllEpisodesQuery = `
    query GetAllEpisodes {
        episodes{
          results {
            id
            name
            air_date
            episode
            created
            characters {
              id
              name
              status
              species
              type
              gender
              origin {
                name
                dimension
              }
              location {
                name
                dimension
              }
              image
              created
            }
          }
        }
    }`;
