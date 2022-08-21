import { gql, useQuery } from "@apollo/client/";

const basic = gql`
  query TournamentsByVideogame($perPage: Int!, $videogameId: ID!) {
    tournaments(
      query: {
        perPage: $perPage
        page: 1
        sortBy: "startAt asc"
        filter: { past: false, videogameIds: [$videogameId] }
      }
    ) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(basic, {
    variables: {
      perPage: 5,
      videogameId: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <>hello world</>;
}
