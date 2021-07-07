import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Button.styles';

const Button = ({ callback, text }) => (
  <Wrapper type='button' onClick={callback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
