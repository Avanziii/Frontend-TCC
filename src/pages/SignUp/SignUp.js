import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Navbar, Footer } from "../../components";
import {
  Container,
  Wrapper,
  Title,
  PersonalInfoWrapper,
  Form
} from "./style";
// auth api
import AuthAPI from '../../api/Auth';

const Signup = () => {
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const history = useHistory();

  const handleInputChange = (inputName, text) => {
    const clonedAuthData = {
      ...authData,
      [inputName]: text,
    };

    setAuthData(clonedAuthData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requiredFields = {
      name: authData.name,
      email: authData.email,
      password: authData.password,
    };

    let hasError = false;

    Object.keys(requiredFields).forEach((key) => {
      if (requiredFields[key] === '') {
        hasError = true;
      }
    });

    if (!hasError) {
      await AuthAPI.signUp(authData);
      setAuthData({ name: '', email: '', password: '' });
      
      setTimeout(() => {
        history.push('/');
      }, 500);
    }
  };
  
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>
            <span>Faça parte do DevGo</span>
            <h1>Crie sua conta</h1>
          </Title>
          <PersonalInfoWrapper>
            <Form onSubmit={handleSubmit}>
              <label
                name="user[login]"
                autoCapitalize="off"
                htmlFor="user_login"
              >Nome de usuário</label>
              <input
                type="text"
                name="user[login]"
                id="user_login"
                autoFocus
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.name}
                onChange={(event) => handleInputChange('name', event.target.value)}
              />
              <label
                type="text"
                name="user[email]"
                htmlFor="user_email"
                autoCapitalize="off"
              >Endereço de email</label>
              <input
                type="email"
                name="user[email]"
                id="user_email"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.email}
                onChange={(event) => handleInputChange('email', event.target.value)}
              />
              <label
                name="user[password]"
                autoComplete="new-password"
                htmlFor="user_password"
              >Senha</label>
              <input
                className="inputPassword"
                type="password"
                name="user[password]"
                id="user_password"
                autoCapitalize="off"
                required
                autoComplete="off"
                spellCheck="false"
                value={authData.password}
                onChange={(event) => handleInputChange('password', event.target.value)}
              />

              <span className="passwordWarning">
                A senha<span> precisa ter 15 caracteres</span> OU pelo menos 8 caracteres incluindo um número e uma letra
                maiúscula.
              </span>

              <button>
                Criar conta
              </button>
            </Form>
          </PersonalInfoWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
