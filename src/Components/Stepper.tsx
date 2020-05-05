import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { StepLabel } from '@material-ui/core'

type Props = {
  steps: {
    title: string
    content: string
  }[]
}

const HorizontalLinearStepper = ({ steps }: Props) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
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
          <Typography className={'instructions'}>
            {steps[activeStep].content}
          </Typography>
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

export default HorizontalLinearStepper
