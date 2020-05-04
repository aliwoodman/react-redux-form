import React from 'react'
import { connect } from 'react-redux'

const Form = ({ state, handleDecrementClick, handleIncrementClick }: any) => {
  return (
    <div>
      <div>Hello world {state}</div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
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
