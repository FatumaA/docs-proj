export const getAllEpisodesQuery = `
      query GetAllEpisodes {
         episodes(page: 1) {
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
      }
    `;
