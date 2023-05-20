import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function App() {
  return (
    <Main>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;  
`;

const Container = styled.div`
  width:375px;
  background-color: #FB6B6B;
  border: 1px solid #DBDBDB;
`;