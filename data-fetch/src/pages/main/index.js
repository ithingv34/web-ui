import { useInfiniteQuery } from "react-query";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const fetchRepositories = async (page = 1) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
  );
  return response.json();
};

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 1 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        setLoading(true);
        if (hasNextPage) {
          await fetchNextPage();
        }
        setLoading(false);
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <main>
      <h1>Infinite Scroll</h1>
      <ul>
        {data?.pages.map((page) =>
          page.items.map((repo) => (
            <li key={repo.id}>
              <p>
                <b>{repo.name}</b>
              </p>
              <p>{repo.description}</p>
            </li>
          ))
        )}
      </ul>
      {loading && <Spinner />}
    </main>
  );
};

export default MainPage;
