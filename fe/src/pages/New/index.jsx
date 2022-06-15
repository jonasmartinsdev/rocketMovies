import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { api } from "../../services/api";
import { Container, Form } from "./styles";

export function New() {

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

 async function handleNewNote() {
    if(!title) {
      return alert("Digite o título da nota")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
    })

    alert('Nota criada com sucesso!')
    navigate('/')
  }
  return (
    <Container>
      <Header />
        <ButtonText className='button' to="/" icon={FiArrowLeft} title={'Voltar'} />
        
        <main>
        <Title title={'Novo filme'}/>

        <Form action="">
          <div>
            <Input 
              placeholder="Título" 
              type="text" 
              onChange={e => setTitle(e.target.value)}
            />
            
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="text" 
              onChange={e => setRating(e.target.value)}
            />
          </div>
        
         <Textarea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

         <Section title={'Marcadores'}>
          <div className="tags">
          {
            tags.map((tag, index) => (
              <NoteItem
                key={String(index)} 
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }
           <NoteItem 
            placeholder={'Novo marcador'}
            isNew
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
          />
          </div>
         </Section>


         <footer>
           <Button 
            title={'Salvar'} 
            onClick={handleNewNote}
          />
         </footer>

        </Form>

      </main>
    
    </Container>
  )
}