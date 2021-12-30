import { useEffect, useState } from "react";

import Seo from "./Seo";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { result } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=API_KEY`
        )
      ).json();
      setMovies(result);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Lodaing...</h4>}
      {movies?.map(movie => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}