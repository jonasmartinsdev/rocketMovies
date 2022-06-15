import { Link } from 'react-router-dom'

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";

import avatarPlaceholder from '../../assets/avatar.svg'
import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarURl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
  
  const [avatar, setAvatar] = useState(avatarURl)
  const [avatarFile, setAvatarFile] = useState(null)
   
  async function handleUpdate() {
    const update = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdate = Object.assign(user, update)

    await updateProfile({user: userUpdate,avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
         <ButtonText to="/" icon={FiArrowLeft} title={'Voltar'} />
      </header>

       <Form>

        <Avatar>
          <img 
              src={avatar} 
              alt="Foto do usuário" 
            />

            <label htmlFor="avatar">
              <FiCamera />
              <input 
                id='avatar' type="file"
                onChange={handleChangeAvatar} 
              />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email" 
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}

        />

        <Input 
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}

        />

        <Button title={'Salvar'} onClick={handleUpdate}/>

      </Form>    
        

    </Container>
  )
}