import styled from 'styled-components';

export const Image = styled.img`
  animation: animateThumb 0.5s;
  border-radius: 0px;
  max-width: 720px;
  object-fit: cover;
  transition: all 0.3s;
  width: 100%;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
