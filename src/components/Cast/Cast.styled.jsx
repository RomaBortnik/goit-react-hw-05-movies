import styled from 'styled-components';

export const CastItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const CastImage = styled.img`
  margin-bottom: 8px;
  width: 200px;
`;
export const CastName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-hight: 1.5;
`;
