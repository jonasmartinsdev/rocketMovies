import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../Star";


export function Note({data, ...rest}) {
  return (
    <Container {...rest}>
       <h1>{data.title}</h1>
         <Star value={Number(data.rating)} />
        <p>{data.description.substring(0, 150) + '...'}</p>
         {
           data.tags && (
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} home/>)
           )
         }
    </Container>
  )
}
