import React from 'react';
import PropTypes from 'prop-types';

import { Content, Text, Wrapper } from './HeroImage.styles';

const HeroImage = ({ image, text, title }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default HeroImage;
