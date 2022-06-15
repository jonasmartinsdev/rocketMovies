import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";
  
  > main {
    grid-area: content;
    overflow-y: scroll;

    max-width: 107.9rem;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 0;


    p {
      margin-top: 4rem;

      padding-right: 1.6rem;
      
      font-size: 1.6rem;
      line-height: 2.1rem;
      text-align: justify;
    }
  }

 
`

export const Title = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  
  h2 {
    margin-right: 1.9rem;
    font-size: 3.6rem;
  }

  svg {
    font-size: 2rem;
    margin-right: .9rem;
  }

`

export const Profile = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  gap: .8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #3E3B47;
  }
 
`