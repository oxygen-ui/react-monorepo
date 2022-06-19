import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ModalProps {}

const StyledModal = styled.div`
  color: pink;
`;

export function Modal(props: ModalProps) {
  return (
    <StyledModal>
      <h1>Welcome to Modal!</h1>
    </StyledModal>
  );
}

export default Modal;
