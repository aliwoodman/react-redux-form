import React from 'react'
import { shallow } from 'enzyme'
import HorizontalLinearStepper from "./Stepper";
import {Button} from "@material-ui/core";

describe('Stepper', () => {
  it('displays a `next` button and no `back` button on first step', () => {
    const steps = [
      {
        title: 'title',
        content: 'content',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
    ]

    const wrapper = shallow(<HorizontalLinearStepper steps={steps}/>)
    expect(wrapper.find('#next-button').text()).toBe('Next')
    expect(wrapper.find('#back-button').length).toBe(0)
  })

  it('displays a `submit` button and a `back` button on the penultimate step', () => {
    const steps = [
      {
        title: 'title',
        content: 'content',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
    ]

    const wrapper = shallow(<HorizontalLinearStepper steps={steps}/>)
    wrapper.find('#next-button').simulate('click')
    expect(wrapper.find('#next-button').text()).toBe('Submit')
    expect(wrapper.find('#back-button').length).toBe(1)
  })

  it('displays no buttons on the final step', () => {
    const steps = [
      {
        title: 'title',
        content: 'content',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
      {
        title: 'titleB',
        content: 'contentB',
      },
    ]

    const wrapper = shallow(<HorizontalLinearStepper steps={steps}/>)
    wrapper.find('#next-button').simulate('click')
    wrapper.find('#next-button').simulate('click')
    expect(wrapper.find(Button).length).toBe(0)
  })
})
