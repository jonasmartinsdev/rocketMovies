import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { Container, Form } from "./styles";

import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />
        <ButtonText to="/" icon={FiArrowLeft} title={'Voltar'} />
        
        <main>
        <Title title={'Novo filme'}/>

        <Form action="">
          <div>
            <Input 
              placeholder="Título" 
              type="text" 
            />
            
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="text" 
            />
          </div>
        
         <Textarea placeholder="Observações"/>

         <Section title={'Marcadores'}>
          <div className="tags">
          <NoteItem value={'React'} />
          <NoteItem placeholder={'Novo marcador'} isNew/>
          </div>
         </Section>


         <footer>
           <Button title={'Excluir filme'} dark />
           <Button title={'Salvar alterações'} />
         </footer>

        </Form>

      </main>
    
    </Container>
  )
}