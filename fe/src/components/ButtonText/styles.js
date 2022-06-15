import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
  background: none;
  border: none;

  color: ${({theme}) => theme.COLORS.PINK};
 
 
  display: flex;
  align-items: center;
  gap: 0.8rem;
`