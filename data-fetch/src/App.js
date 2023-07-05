import { useQuery } from "react-query";

const fetchRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=1"
  ).then((res) => res.json());
  return response;
};

function App() {
  const { isLoading, error, data } = useQuery(
    "repositories",
    fetchRepositories
  );

  return (
    <main>
      <h1>infinite scroll</h1>
      <ul>
        {data.items.map((repo) => (
          <li key={repo.id}>
            <p>
              <b>{repo.name}</b>
            </p>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
