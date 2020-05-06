import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UserState } from '../types'
import { Container } from './Container.styles'
import { IState } from '../reducer'

const Input = styled.input`
  margin-bottom: 2px;
`

const Label = styled.label`
  &&:after {
    content: ' *';
    color: red;
  }
`

const Warning = styled.span`
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
`

const Spacer = styled.div`
  margin-bottom: 10px;
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
        value={user.firstName.value}
      />
      {!user.firstName.isValid && user.requestNextStep ? (
        <Warning>First name is required</Warning>
      ) : (
        <Spacer />
      )}
      <Label htmlFor="lname">Last name:</Label>
      <Input
        type="text"
        id="lname"
        name="lname"
        onChange={onChange('lastName')}
        value={user.lastName.value}
      />
      {!user.lastName.isValid && user.requestNextStep ? (
        <Warning>Last name is required</Warning>
      ) : (
        <Spacer />
      )}
      <Label htmlFor="email">Email:</Label>
      <Input
        type="text"
        id="email"
        name="email"
        onChange={onChange('email')}
        value={user.email.value}
      />
      {!user.email.isValid && user.requestNextStep ? (
        <Warning>Email is required</Warning>
      ) : (
        <Spacer />
      )}
      <Label htmlFor="password">Password:</Label>
      <Input
        type="text"
        id="password"
        name="password"
        onChange={onChange('password')}
        value={user.password.value}
      />
      {!user.password.isValid && user.requestNextStep ? (
        <Warning>Password is required</Warning>
      ) : (
        <Spacer />
      )}
    </Container>
  )
}

export default connect(
  (state: IState) => ({
    user: state.user,
  }),
  (dispatch: any) => ({
    updateUser: (name: string, value: string) =>
      dispatch({ type: 'UPDATE_USER', payload: { name, value } }),
  })
)(User)
