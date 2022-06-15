import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Z;

  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_900};

  border-radius: 10px;
  margin-top: .8rem;

  >input{
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-left: 16px;
    }
`;