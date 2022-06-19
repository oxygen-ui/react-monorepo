import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AutocompleteProps {}

const StyledAutocomplete = styled.div`
  color: pink;
`;

export function Autocomplete(props: AutocompleteProps) {
  return (
    <StyledAutocomplete>
      <h1>Welcome to Autocomplete!</h1>
    </StyledAutocomplete>
  );
}

export default Autocomplete;
