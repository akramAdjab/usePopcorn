import { useState, useEffect } from "react";

import KEY from "./config";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error(data.Error);

          setMovies(data.Search);
          setError("");
        } catch (err) {
          setError(
            err.message === "Failed to fetch"
              ? "something went wrong with fetching movies"
              : err.message
          );

          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
      //   handleCloseMovie();

      return () => controller.abort();
    },
    [query]
  );

  return { movies, isLoading, error };
}
