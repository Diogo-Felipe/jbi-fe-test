import styled from 'styled-components';

import { globalColors } from '@/styles/colors';

export const SearchBar = styled.input`
  width: 50%;
  height: 2em;

  color: ${globalColors.black};
  background-color: ${globalColors.primary};

  margin: 0;
  border: 0;
`;
