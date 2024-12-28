import styled from 'styled-components';

import { globalColors } from '@/styles/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 50%;

  padding: 16px 8px;

  background-color: ${globalColors.white};
`;

export const ListSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-right: 1em;
  width: 10em;
`;

export const CategoriesHeader = styled.h3`
  font-size: 1.5em;
  color: black;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CategoryItem = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 10em;
  height: 2.5em;

  margin-bottom: 0.5em;

  background-color: ${(props) => (props?.selected ? globalColors.secondary : 'transparent')};
  border-radius: 0;

  color: black;
  text-align: left;
`;

export const ComponentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ComponentsHeader = styled.h3`
  font-size: 1.5em;
  color: black;
`;

export const ComponentsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ComponentItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7em;
  height: 2.5em;

  line-height: 1em;
  text-align: center;

  box-sizing: border-box;

  margin: 0 0.5em 0.5em 0;

  background-color: ${globalColors.white};
  color: black;

  border: 1px solid ${globalColors.black};
  border-radius: 0;
`;
