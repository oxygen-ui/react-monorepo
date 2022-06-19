import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StepperProps {}

const StyledStepper = styled.div`
  color: pink;
`;

export function Stepper(props: StepperProps) {
  return (
    <StyledStepper>
      <h1>Welcome to Stepper!</h1>
    </StyledStepper>
  );
}

export default Stepper;
