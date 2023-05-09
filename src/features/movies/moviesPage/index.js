import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../search/queryParameters";
import {
  fetchMovieById,
  selectMovieInfo,
  selectMovieStatus,
} from "../moviePage/movieSlice";
import { selectSearchMoviesStatus } from "../../search/searchSlice";
import { useEffect } from "react";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";
// import { CrewCast } from "./CrewCast";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchResult } from "../../../common/SearchResult";

export const Movie = () => {
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const movieInfo = useSelector(selectMovieInfo);
  const dispatch = useDispatch();
  const searchStatus = useSelector(selectSearchMoviesStatus);
  const status = useSelector(selectMovieStatus);
  const replaceQueryParameters = useReplaceQueryParameters();

  useEffect(() => {
    replaceQueryParameters({
      key: "page",
      value: 1,
    });
    if (id) {
      dispatch(fetchMovieById(id));
    } else {return <SearchResult />}
  }, [dispatch, id]);

  if (status === "error" && query === null) return <Error />;
  if (status === "loading" && query === null)
    return <Loader searchFor={"movie"} />;
  if (searchStatus === "success" && query !== null) return <SearchResult />;
  if (status === "success" && query === null)
    return (
      <>
        {movieInfo.movieDescription.backdrop_path ? 
          <BackgroundPoster
            poster={movieInfo.movieDescription.backdrop_path}
            rate={movieInfo.movieDescription.vote_average}
            title={movieInfo.movieDescription.title}
            voteCount={movieInfo.movieDescription.vote_count}
          />
         : null}

        <AboutMovie
          poster={movieInfo.movieDescription.poster_path}
          title={movieInfo.movieDescription.title}
          productionCountry={movieInfo.movieDescription.production_countries}
          date={movieInfo.movieDescription.release_date}
          release={movieInfo.movieDescription.release_date}
          genres={movieInfo.movieDescription.genres}
          voteCount={movieInfo.movieDescription.vote_count}
          rate={movieInfo.movieDescription.vote_average}
          overview={movieInfo.movieDescription.overview}
        />
      </>
    );

};
