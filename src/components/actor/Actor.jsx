import React from 'react';
import PropTypes from 'prop-types';

// Styles

import { Image, Wrapper } from './Actor.styles';

const Actor = ({ character, imageUrl, name }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  character: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default Actor;
