import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { Background, Container, Form } from "./styles";


export function SignIn() {
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }
  
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail" 
          type="email" 
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Entrar" 
          onClick={handleSignIn}
        />


        <ButtonText to={'/register'} title={'Criar Conta'} />
      </Form>

      <Background />
    </Container>
  )
}