import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UserState } from '../types'
import { Container } from './Container.styles'
import { State } from '../reducer'

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
  updateOptionalUserField: (name: string, value: string) => void
  updateRequiredUserField: (name: string, value: string) => void
}

type StateProps = {
  user: UserState
}

type Props = DispatchProps & StateProps

const User = ({
  updateOptionalUserField,
  updateRequiredUserField,
  user,
}: Props) => {

  const onChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (Object.keys(user.optionalFields).includes(name)) {
      updateOptionalUserField(name, event.target.value)
    } else {
      updateRequiredUserField(name, event.target.value)
    }
  }

  return (
    <Container>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={onChange('name')}
        value={user.requiredFields.name.value}
      />
      {!user.requiredFields.name.isValid && user.requestNextStep ? (
        <Warning>Name is required</Warning>
      ) : (
        <Spacer />
      )}
      <label htmlFor="role">Role:</label>
      <Input
        type="text"
        id="role"
        name="role"
        onChange={onChange('role')}
        value={user.optionalFields.role.value}
      />
      <Spacer />
      <Label htmlFor="email">Email:</Label>
      <Input
        type="text"
        id="email"
        name="email"
        onChange={onChange('email')}
        value={user.requiredFields.email.value}
      />
      {!user.requiredFields.email.isValid && user.requestNextStep ? (
        <Warning>A valid email is required</Warning>
      ) : (
        <Spacer />
      )}
      <Label htmlFor="password">Password:</Label>
      <Input
        type="text"
        id="password"
        name="password"
        onChange={onChange('password')}
        value={user.requiredFields.password.value}
      />
      {!user.requiredFields.password.isValid && user.requestNextStep ? (
        <Warning>
          Password is required (at least 10 characters including at least one uppercase
          letter, one lowercase letter and one number)
        </Warning>
      ) : (
        <Spacer />
      )}
    </Container>
  )
}

export default connect(
  (state: State) => ({
    user: state.user,
  }),
  (dispatch) => ({
    updateRequiredUserField: (name: string, value: string) =>
      dispatch({
        type: 'UPDATE_REQUIRED_USER_FIELD',
        payload: { name, value },
      }),
    updateOptionalUserField: (name: string, value: string) =>
      dispatch({
        type: 'UPDATE_OPTIONAL_USER_FIELD',
        payload: { name, value },
      }),
  })
)(User)
