import { Container } from "./styles";


export function Button({title, icon:Icon, loading, dark,  ...rest}) {
  return (
    <Container
     type="button"
     disabled={loading}
     dark={dark}
     {...rest}
    >
     {Icon && <Icon size={16} /> }    {title}
    </Container>
  )
}