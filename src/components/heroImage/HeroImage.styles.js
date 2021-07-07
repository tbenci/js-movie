import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 20px;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
    url(${(props) => props.image}), var(--darkGrey);
  background-position: center;
  background-size: 100%, cover;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
