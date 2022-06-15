import styled from "styled-components";


export const Container = styled.button`
  border: none;
  background: ${({theme, dark}) => dark ? theme.COLORS.BACKGROUND_600 : theme.COLORS.PINK};
  color: ${({theme, dark}) => dark ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};

  border-radius: .8rem;
  padding: 1.6rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:disabled {
    opacity: 0.5;
  }

  svg {
    color: #000000;
  }


  @media (max-width:600px) {
    padding: 1.2rem 2.2rem;
  }
`