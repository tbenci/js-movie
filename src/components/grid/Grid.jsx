import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './Grid.styles';

const Grid = ({ children, header }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
