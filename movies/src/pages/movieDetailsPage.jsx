import React from "react";
import { useParams } from "react-router";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getRecommendedMovies } from "../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";

const MoviePage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isPending, isError } = useQuery({
    queryKey: ["movie", { id: id }],
    queryFn: getMovie,
  });

  const { data: recommendedMovies, isPending: isPendingRecommended } = useQuery({
    queryKey: ["recommended", { id }],
    queryFn: getRecommendedMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />

            {/* Suggested Movies Section */}
            <div>
              <h2>Suggested Movies</h2>
              {isPendingRecommended ? (
                <Spinner />
              ) : (
                <ul>
                  {recommendedMovies?.results?.length > 0 ? (
                    recommendedMovies.results.map((suggestedMovie) => (
                      <li key={suggestedMovie.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/w200${suggestedMovie.poster_path}`}
                          alt={suggestedMovie.title}
                        />
                        <p>{suggestedMovie.title}</p>
                      </li>
                    ))
                  ) : (
                    <p>No recommendations available.</p>
                  )}
                </ul>
              )}
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
