import { reducer } from './reducer'

describe('reducer', () => {
  it('sets the initial state', () => {
    const state = undefined
    const action = {}

    const reducedState = reducer(state, action as any)
    expect(reducedState).toEqual({
      user: {
        email: {
          isValid: false,
          value: '',
        },
        firstName: {
          isValid: false,
          value: '',
        },
        lastName: {
          isValid: false,
          value: '',
        },
        password: {
          isValid: false,
          value: '',
        },
        requestNextStep: false,
      },
      privacy: {
        currentProductEmailConsent: false,
        relatedProductEmailConsent: false,
      },
    })
  })

  describe('UPDATE_USER', () => {
    it('updates the key that matches the name, with the given value', () => {
      const state = undefined
      const action = {
        type: 'UPDATE_USER',
        payload: { name: 'firstName', value: 'Bob' },
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.user).toEqual({
        email: {
          isValid: false,
          value: '',
        },
        firstName: {
          isValid: true,
          value: 'Bob',
        },
        lastName: {
          isValid: false,
          value: '',
        },
        password: {
          isValid: false,
          value: '',
        },
        requestNextStep: false,
      })
    })
  })

  describe('UPDATE_REQUEST_NEXT_STEP', () => {
    it('sets requestNextStep to the given payload', () => {
      const state = undefined
      const action = {
        type: 'UPDATE_REQUEST_NEXT_STEP',
        payload: true,
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.user.requestNextStep).toEqual(true)
    })
  })

  describe('UPDATE_PRIVACY', () => {
    it('updates the key that matches the name, with the given value', () => {
      const state = undefined
      const action = {
        type: 'UPDATE_PRIVACY',
        payload: { name: 'currentProductEmailConsent', value: true },
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.privacy).toEqual({
        currentProductEmailConsent: true,
        relatedProductEmailConsent: false,
      })
    })
  })
})
