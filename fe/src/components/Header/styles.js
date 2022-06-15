import styled from "styled-components";


export const Container = styled.header`
   grid-area: header;
   height: 10.5rem;
   width: 100%;
   
   display: flex;
   border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
`

export const Content = styled.div`
  max-width: 107.9rem;
  width: 100%;
  margin: 0 auto;


  display: flex;
  align-items: center;
  justify-content: ${({activeSearch}) => !activeSearch && 'space-between'};
  gap: 6.4rem;


  > h1 {
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({theme}) => theme.COLORS.PINK};

  }
  @media (max-width:600px) {
      & {
        margin-top: 2rem;
        display: grid;
        grid-template-areas: "X Y"
        "Z Z";

        gap: 0;
        justify-content: space-between;
      }

      h1 {
        grid-area: X;
        font-size: 1.4rem;
      }
   }
`


export const Profile = styled.div`
   display: flex;
   align-items: center;

   > div {
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     margin-right: 0.9rem;

     strong {
       font-size: 1.4rem;
       white-space: nowrap;
     }

     button {
       background: none;
       border: none;
       color: ${({theme}) => theme.COLORS.GRAY_100};
       font-size: 1.4rem;
     }
   }
 

    img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  }

  @media (max-width:600px) {
      & {
        grid-area: Y;

        img {
          width: 4.4rem;
          height: 4.4rem;
        }
      }
   }
`