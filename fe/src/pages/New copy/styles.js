import styled from "styled-components";


export const Container = styled.div`
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 10.5rem auto;
 grid-template-areas:
  "header"
  "title"
  "main";

          
  a {
    max-width: 107.9rem;
    width: 100%;
    margin: 5rem auto;
  }


  > main {
    grid-area: main;
    max-width: 107.9rem;
    overflow-y: scroll;

    width: 100%;

    margin: 0 auto;
  }


.tags {
    margin-top: 2.4rem ;
    background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    padding: 1.6rem;

    border-radius: .8rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
  }

`

export const Form = styled.form`
  margin-top: 4rem;
  padding-right: 1.6rem;

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 3rem;
  }

  > footer {
    margin: 4rem 0;
    display: flex;
    align-items: center;
    gap: 4rem;

    button {
      width: 100%;
    }
  }

`