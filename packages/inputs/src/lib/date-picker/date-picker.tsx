import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DatePickerProps {}

const StyledDatePicker = styled.div`
  color: pink;
`;

export function DatePicker(props: DatePickerProps) {
  return (
    <StyledDatePicker>
      <h1>Welcome to DatePicker!</h1>
    </StyledDatePicker>
  );
}

export default DatePicker;
