import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <Main>
      <Container>
        <Header />
        <Content counter={counter} setCounter={setCounter} cardsArray={cards}/>
        <Footer counter={counter} cardsArray={cards}/>
      </Container>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;  
`;

const Container = styled.div`
  width:100%;
  min-width: 375px;
  height: 100%;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
`;