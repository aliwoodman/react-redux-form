import React from 'react'
import styled from 'styled-components'

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

const User = () => {
  return (
    <Container>
      <Label htmlFor="fname">First name:</Label>
      <Input type="text" id="fname" name="fname" value="" />
      <Label htmlFor="lname">Last name:</Label>
      <Input type="text" id="lname" name="lname" value="" />
      <Label htmlFor="email">Email:</Label>
      <Input type="text" id="email" name="email" value="" />
      <Label htmlFor="password">Password:</Label>
      <Input type="text" id="password" name="password" value="" />
    </Container>
  )
}

export default User
