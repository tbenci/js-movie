// React components

import React from 'react';

// Config

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from './../config';

// Components

import Button from './button/Button';
import Grid from './grid/Grid';
import HeroImage from './heroImage/HeroImage';
import SearchBar from './searchBar/SearchBar';
import Spinner from './spinner/Spinner';
import Thumb from './thumb/Thumb';

// Hooks

import { useHomeFetch } from './../hooks/useHomeFetch';

// Images

import NoImage from './../images/no_image.jpg';

const Home = () => {
  const { error, setIsLoadingMore, loading, searchTerm, setSearchTerm, state } = useHomeFetch();

  const heroImage = state.results[0];

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && heroImage && (
        <HeroImage
          image={IMAGE_BASE_URL + BACKDROP_SIZE + heroImage.backdrop_path}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            clickable
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
            key={movie.id}
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)} text='Load more' />
      )}
    </>
  );
};

export default Home;
