import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const BackButton = styled(NavLink)`
  padding: 4px 8px;
  width: 60px;
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.2;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #e9e9e9;
  }
`;
