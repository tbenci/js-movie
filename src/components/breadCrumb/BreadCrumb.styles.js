import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background: var(--medGrey);
  color: var(--white);
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;
`;
