import { Button } from "../Button";
import { Container } from "./styles";
import { Link } from 'react-router-dom'

import { AiOutlinePlus } from 'react-icons/ai'

export function Title({title, activeButton}) {
  return (
    <Container>
      <div>
         <h2>{title}</h2>
         {activeButton && (
           <Link to='/new'>
             <Button icon={AiOutlinePlus} title={'Adicionar filme'} />
           </Link>
         ) }
      </div>
    </Container>
  )
}