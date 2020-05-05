import React from 'react'
import { connect } from 'react-redux'
import HorizontalLinearStepper from './Stepper'

const Form = ({ state, handleDecrementClick, handleIncrementClick }: any) => {

  const steps = [
    { title: 'User', content: 'User questions' },
    { title: 'Privacy', content: 'Privacy questions' },
    { title: 'Done', content: 'Done screen' },
  ]

  return (
    <div>
      <div>Hello world {state}</div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
      <HorizontalLinearStepper steps={steps} />
    </div>
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
