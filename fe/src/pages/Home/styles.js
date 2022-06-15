import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  padding: 0 0.8rem;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "title"
  "main"
  "content";

  > div {
    margin-top: 5rem;
  }

  
  > main {    
    grid-area: main;
    overflow-y: scroll;
    max-width: 107.9rem;
    width: 100%;
    margin: 4rem auto 0;
    padding-right: 1rem;

    > button {
      margin-bottom: 2.4rem;
    }
  }  

`