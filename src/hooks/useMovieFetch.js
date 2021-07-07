import { useEffect, useState } from 'react';

// API

import API from './../API';

// Helpers

import { isPersistedState } from './../helpers';

export const useMovieFetch = (movieId) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors
        const directors = credits.crew.filter((member) => member.job === 'Director');
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchMovie();
  }, [movieId]);

  // Write to session storage

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [error, loading, state]);

  return { error, loading, state };
};
