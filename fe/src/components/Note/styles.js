import styled from "styled-components";

export const Container = styled.button`  
  width: 100%;
  background: rgba(255, 133, 155, 0.05);
  border: none;
  border-radius: 1.6rem;

  text-align: left;
  padding: 3.2rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: .8rem;
  }

  > p {
    color: #999591;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin: 1.5rem 0 2rem 0;

    font-family: 'Roboto', sans-serif;
  }


  @media (max-width:600px) {
    padding: 2rem;

    h1 {
      font-size: 2rem;
    }

    p {
      margin: 1rem 0 1.5rem 0;
      font-size: 1.3rem;
    }
  } 
`