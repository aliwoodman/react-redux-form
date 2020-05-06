import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import Button from '@material-ui/core/Button'
import { StepLabel } from '@material-ui/core'
import { connect } from 'react-redux'
import { UserState } from '../types'
import { IState } from '../reducer'

type DispatchProps = {
  requestNextStep: (value: boolean) => void
}

type StateProps = {
  user: UserState
}
type ComponentProps = {
  steps: {
    title: string
    content: JSX.Element
  }[]
}

type Props = DispatchProps & StateProps & ComponentProps

const areInputsValid = (user: UserState) => {
  return Object.values(user).every((value) => {
    return typeof value === 'boolean' || value.isValid
  })
}

const HorizontalLinearStepper = ({ steps, requestNextStep, user }: Props) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    if (activeStep === 0) {
      requestNextStep(true)
      if (areInputsValid(user)) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className={'root'}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          return (
            <Step key={step.title}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        <div>
          {steps[activeStep].content}
          <div>
            {activeStep > 0 && activeStep < steps.length - 1 ? (
              <Button onClick={handleBack} id={'back-button'}>
                Back
              </Button>
            ) : null}
            {activeStep === steps.length - 1 ? null : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                id={'next-button'}
              >
                {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (state: IState) => ({
    user: state.user,
  }),
  (dispatch: any) => ({
    requestNextStep: (value: boolean) =>
      dispatch({ type: 'UPDATE_REQUEST_NEXT_STEP', payload: value }),
  })
)(HorizontalLinearStepper)
