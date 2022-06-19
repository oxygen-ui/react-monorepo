import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AccordionProps {}

const StyledAccordion = styled.div`
  color: pink;
`;

export function Accordion(props: AccordionProps) {
  return (
    <StyledAccordion>
      <h1>Welcome to Accordion!</h1>
    </StyledAccordion>
  );
}

export default Accordion;
