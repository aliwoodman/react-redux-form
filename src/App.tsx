import React from 'react'
import './App.css'
import Form from './Components/Form'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Container className="App">
      <Form />
    </Container>
  )
}

export default App
