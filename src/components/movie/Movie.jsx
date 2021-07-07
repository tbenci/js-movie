import React from 'react';
import { useParams } from 'react-router-dom';

// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from './../../config';

// Components

import Actor from '../actor/Actor';
import BreadCrumb from './../breadCrumb/BreadCrumb';
import Grid from './../grid/Grid';
import MovieInfo from '../movieInfo/MovieInfo';
import MovieInfoBar from '../movieInfoBar/MovieInfoBar';
import Spinner from './../spinner/Spinner';

// Hook

import { useMovieFetch } from '../../hooks/useMovieFetch';

// Image

import NoImage from './../../images/no_image.jpg';

// Styles

// NONE

const Movie = () => {
  const { movieId } = useParams();
  const { error, loading, state: movie } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header='Actors'>
        {movie.actors.map((actor) => (
          <Actor
            character={actor.character}
            imageUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : NoImage}
            key={actor.credit_id}
            name={actor.name}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
