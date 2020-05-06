import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { State } from '../reducer'
import { PrivacyState, UserState } from '../types'

const Container = styled.div`
  display: flex;
  color: green;
  flex-direction: column;
  margin-bottom: 10px;
`

const Tick = styled.img`
  fill: red;
  margin: 20px;
`

type StateProps = {
  user: UserState
  privacy: PrivacyState
}

const Done = ({ user, privacy }: StateProps) => {
  console.log({ ...user.requiredFields, ...user.optionalFields, privacy })
  return (
    <Container>
      <Tick src={'/done.svg'} />
      <div>
        Please verify your email address, you should have received an email from
        us already!
      </div>
    </Container>
  )
}

export default connect((state: State) => ({
  user: state.user,
  privacy: state.privacy,
}))(Done)
