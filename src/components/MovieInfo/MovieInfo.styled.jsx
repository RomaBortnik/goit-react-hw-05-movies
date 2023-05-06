import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
`;

export const MovieInfoContainer = styled.div`
  margin-left: 24px;
  & p,
  h1,
  h2,
  h3 {
    margin-bottom: 12px;
  }
`;
