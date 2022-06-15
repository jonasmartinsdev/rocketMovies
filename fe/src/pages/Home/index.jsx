import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Title } from "../../components/Title";
import { api } from "../../services/api";
import { Container } from "./styles";


export function Home() {

   const [notes, setNotes] = useState([])
   const [search, setSearch] = useState('')

   const navigate = useNavigate('')
  

   useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
   }, [search])

   function handleDetails(id) {
    navigate(`/details/${id}`)
   }

  return (
    <Container>
      <Header activeSearch setSearch={setSearch}/>
       <Title title={'Meus filmes'} activeButton/>
      <main>
         {
          notes.map((note) => (
          <Note
            key={note.id}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
          ))
         }


      </main>
    </Container>
  )
}