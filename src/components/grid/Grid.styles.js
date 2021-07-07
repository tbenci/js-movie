import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
