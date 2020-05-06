import React from 'react'
import { Container } from './Container.styles'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { PrivacyState } from '../types'
import { State } from '../reducer'

const Checkbox = styled.div`
  margin-bottom: 10px;
  display: flex;
`

const Label = styled.label`
  margin-left: 10px;
`

type DispatchProps = {
  updatePrivacy: (name: string, value: boolean) => void
}

type StateProps = {
  privacy: PrivacyState
}

type Props = DispatchProps & StateProps

const Privacy = ({ privacy, updatePrivacy }: Props) => {
  return (
    <Container>
      <Checkbox>
        <input
          type="checkbox"
          id="privacyA"
          name="privacyA"
          checked={privacy.currentProductEmailConsent}
          onChange={() =>
            updatePrivacy(
              'currentProductEmailConsent',
              !privacy.currentProductEmailConsent
            )
          }
        />
        <Label htmlFor="privacyA">
          Receive updates about Tray.io product by email
        </Label>
      </Checkbox>
      <Checkbox>
        <input
          type="checkbox"
          id="privacyB"
          name="privacyB"
          checked={privacy.relatedProductEmailConsent}
          onChange={() =>
            updatePrivacy(
              'relatedProductEmailConsent',
              !privacy.relatedProductEmailConsent
            )
          }
        />
        <Label htmlFor="privacyB">
          Receive communication by email for other products created by the
          Tray.io team
        </Label>
      </Checkbox>
    </Container>
  )
}

export default connect(
  (state: State) => ({
    privacy: state.privacy,
  }),
  (dispatch: any) => ({
    updatePrivacy: (name: string, value: boolean) =>
      dispatch({ type: 'UPDATE_PRIVACY', payload: { name, value } }),
  })
)(Privacy)
