import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { Input } from "../Input";
import { Container, Content, Profile } from "./styles";

import avatarPlaceholder from '../../assets/avatar.svg'

import { api } from '../../services/api';


export function Header({activeSearch, setSearch}) {

  const { signOut, user } = useAuth()

  const avatarURl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder

  return (
    <Container >
      <Content activeSearch={activeSearch}>
        <h1>RocketMovies</h1>
         
       {activeSearch &&  (
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
       )}
        
        <Profile>
            <div>
              <strong>{user.name}</strong>
              <button onClick={signOut}>sair</button>
            </div>

         <Link to="/profile">
          <img 
            src={avatarURl} 
            alt="Foto do usuário" 
            />
         </Link>
        </Profile>
       </Content>

    </Container>
  )
}