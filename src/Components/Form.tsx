import React from 'react'
import { connect } from 'react-redux'
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
  max-width: 700px;
  width: 100%;
`

const Form = ({ state, handleDecrementClick, handleIncrementClick }: any) => {
  const steps = [
    { title: 'User', content: <User /> },
    { title: 'Privacy', content: <Privacy /> },
    { title: 'Done', content: <Done /> },
  ]

  return (
    <Container>
      <div>Hello world {state}</div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
      <HorizontalLinearStepper steps={steps} />
    </Container>
  )
}

export default connect(
  (state: any) => ({
    state: state,
  }),
  (dispatch: any) => ({
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
  })
)(Form)
