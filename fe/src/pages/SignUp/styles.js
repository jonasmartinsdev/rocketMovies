import styled from "styled-components";

import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  button {
    width: 100%;
    margin-top: 2.4rem;
  }
`

export const Form = styled.form`
   padding: 0 13.4rem;

   display: flex;
   flex-direction: column;
   justify-content: center;

   > h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({theme}) => theme.COLORS.PINK};
   }

   > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({theme}) => theme.COLORS.GRAY_500};
   }

   > h2 {
      margin: 4.2rem 0 ;
   }

   a {
     margin-top: 4.8rem;
     display: flex;
     justify-content: center;
   }

   @media (max-width:600px) {
    & {
        padding: 2rem;
        align-items: center;
        width: 100%;

      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.4rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
`

export const Background = styled.div`
 flex: 1;
 background: url(${backgroundImg}) no-repeat center center;
 background-size: cover;
`