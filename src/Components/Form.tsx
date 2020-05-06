import React from 'react'
import HorizontalLinearStepper from './Stepper'
import User from './User'
import Privacy from './Privacy'
import Done from './Done'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`

const Form = () => {
  const steps = [
    { title: 'User', content: <User /> },
    { title: 'Privacy', content: <Privacy /> },
    { title: 'Done', content: <Done /> },
  ]

  return (
    <Container>
      <HorizontalLinearStepper steps={steps} />
    </Container>
  )
}

export default Form
