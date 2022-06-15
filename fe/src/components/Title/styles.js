import styled from "styled-components";


export const Container = styled.div`
  grid-area: title;

  max-width: 107.9rem;
  margin: 0 auto;
  width: 100%;
   
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 3.2rem;
      font-weight: 400;
     
      @media (max-width:600px) {
        font-size: 2.2rem;
     }
    }
  }
`