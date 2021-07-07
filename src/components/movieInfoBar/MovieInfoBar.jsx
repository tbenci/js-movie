import React from 'react';
import PropTypes from 'prop-types';

// Helpers

import { calcTime, convertMoney } from './../../helpers';

// Styles

import { Content, Wrapper } from './MovieInfoBar.styles';

const MovieInfoBar = ({ budget, revenue, time }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className='column'>
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  budget: PropTypes.number,
  revenue: PropTypes.number,
  time: PropTypes.number,
};

export default MovieInfoBar;
