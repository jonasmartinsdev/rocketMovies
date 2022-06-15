import { Container } from "./styles";


export function Tag({title, home, ...rest}) {
  return (
    <Container home={home} {...rest}>
      {title}
    </Container>
  )
}