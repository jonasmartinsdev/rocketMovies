import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

import { AiOutlineArrowLeft, AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { MdOutlineWatchLater} from 'react-icons/md'
import { Container, Profile, Title } from "./styles";

import { Tag } from "../../components/Tag";
import { Star } from "../../components/Star";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar.svg'


export function Details() {
   
  const [data, setData] = useState(null)

  const avatarURl = data && `${api.defaults.baseURL}/files/${data.user.avatar}`
  
  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()

  }, [])

  return (
    <Container>
      <Header />
      {
        data &&

        <main>
        <ButtonText to={'/'} icon={AiOutlineArrowLeft} title={'Voltar'} />
     
        <Title>
          <h2>{data.title}</h2>
            <Star value={data.rating} />
        </Title>

        <Profile>
          <img 
           src={avatarURl || avatarPlaceholder } 
           alt="Foto do usuário" 
           />

           <span>Por Jonas Martins </span>
           <MdOutlineWatchLater color={'#FF859B'} size={20} />
           <span>{data.created_at}</span>
        </Profile>

        {  data.tags && 
        data.tags.map(tag => (
          <Tag key={tag.id} title={tag.name} />
        ))
        }

        <p>{data.description}</p>

     </main>
      }
     

    </Container>
  )
}