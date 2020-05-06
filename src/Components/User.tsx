import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UserState } from '../types'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
`
const Input = styled.input`
  margin-bottom: 10px;
`

const Label = styled.label`
  &&:after {
    content: ' *';
    color: red;
  }
`

type DispatchProps = {
  updateUser: (name: string, value: string) => void
}

type StateProps = {
  user: UserState
}

type Props = DispatchProps & StateProps

const User = ({ updateUser, user }: Props) => {
  const onChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateUser(name, event.target.value)
  }

  return (
    <Container>
      <Label htmlFor="fname">First name:</Label>
      <Input
        type="text"
        id="fname"
        name="fname"
        onChange={onChange('firstName')}
        value={user.firstName}
      />
      <Label htmlFor="lname">Last name:</Label>
      <Input
        type="text"
        id="lname"
        name="lname"
        onChange={onChange('lastName')}
        value={user.lastName}
      />
      <Label htmlFor="email">Email:</Label>
      <Input
        type="text"
        id="email"
        name="email"
        onChange={onChange('email')}
        value={user.email}
      />
      <Label htmlFor="password">Password:</Label>
      <Input
        type="text"
        id="password"
        name="password"
        onChange={onChange('password')}
        value={user.password}
      />
    </Container>
  )
}

export default connect(
  (state: any) => ({
    user: state.user,
  }),
  (dispatch: any) => ({
    updateUser: (name: string, value: string) =>
      dispatch({ type: 'UPDATE_USER', payload: { name, value } }),
  })
)(User)
