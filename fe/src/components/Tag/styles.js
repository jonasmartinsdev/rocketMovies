import styled from 'styled-components'


export const Container = styled.span`

  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;
  color: ${({theme, home}) => home ? "#E5E5E5" : theme.COLORS.WHITE};
  background-color: ${({theme, home}) => home ? theme.COLORS.GRAY_400 : theme.COLORS.BACKGROUND_900};
`