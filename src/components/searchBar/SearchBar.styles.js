import styled from 'styled-components';

export const Content = styled.div`
  background: var(--medGrey);
  border-radius: 30px;
  color: var(--white);
  height: 55px;
  margin: 0 auto;
  max-width: var(--maxWidth);
  position: relative;
  width: 100%;

  img {
    left: 15px;
    position: absolute;
    top: 14px;
    width: 30px;
  }

  input {
    background: transparent;
    border: 0;
    color: var(--white);
    font-size: var(--fontBig);
    height: 40px;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    position: absolute;
    width: 95%;

    :focus {
      outline: none;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background: var(--darkGrey);
  display: flex;
  height: 100px;
  padding: 0 20px;
`;
