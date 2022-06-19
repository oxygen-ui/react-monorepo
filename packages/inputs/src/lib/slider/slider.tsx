import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SliderProps {}

const StyledSlider = styled.div`
  color: pink;
`;

export function Slider(props: SliderProps) {
  return (
    <StyledSlider>
      <h1>Welcome to Slider!</h1>
    </StyledSlider>
  );
}

export default Slider;
