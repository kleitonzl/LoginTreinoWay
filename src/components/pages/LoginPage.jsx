import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #00264d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const RightPanel = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 1rem;

  &:invalid {
    border-color: red;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: -10px 0 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #00264d;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #004080;
  }
`;

const Link = styled.a`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #0077cc;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({ cpf: '', senha: '' });

  const validarCPF = (cpf) => {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    // Validação básica do CPF (não verifica validade matemática)
    const cpfRegex = /^\d{11}$/;
    return cpfRegex.test(cpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { cpf: '', senha: '' };

    // Validação do CPF
    if (!cpf) {
      newErrors.cpf = 'CPF é obrigatório.';
      valid = false;
    } else if (!validarCPF(cpf)) {
      newErrors.cpf = 'CPF inválido.';
      valid = false;
    }

    // Validação da senha
    if (!senha) {
      newErrors.senha = 'Senha é obrigatória.';
      valid = false;
    } else if (senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert('Login efetuado com sucesso!');
      // Aqui você pode implementar a lógica de autenticação
    }
  };

  return (
    <Container>
      <LoginBox>
        <LeftPanel>
          <Title>Treino Way</Title>
          <Subtitle>Ferramenta para consulta de status de treinamentos</Subtitle>
        </LeftPanel>
        <RightPanel>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}

            <Label htmlFor="senha">Senha</Label>
            <Input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}

            <Button type="submit">Entrar</Button>
            <p>
             Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </Form>
        </RightPanel>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
