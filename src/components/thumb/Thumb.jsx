import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Image } from './Thumb.styles';

const Thumb = ({ clickable, image, movieId }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

Thumb.propTypes = {
  clickable: PropTypes.bool,
  image: PropTypes.string,
  movieId: PropTypes.number,
};

export default Thumb;
