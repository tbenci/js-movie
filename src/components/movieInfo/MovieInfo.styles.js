import styled from 'styled-components';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from './../../config';

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  display: flex;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .director {
    margin: 0 0 0 40px;

    h1 {
      @media screen and (max-width: 768px) {
        font-size: var(--fontBig);
      }
    }

    p {
      margin: 0;
    }
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  animation: animateMovieInfo 1s;
  background-position: center;
  background-size: cover;
  background: ${({ backdrop }) => (backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000')};
  padding: 40px 20px;

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
