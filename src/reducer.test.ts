import { reducer } from './reducer'

describe('reducer', () => {
  it('sets the initial state', () => {
    const state = undefined
    const action = {}

    const reducedState = reducer(state, action as any)
    expect(reducedState).toEqual({
      privacy: {
        currentProductEmailConsent: false,
        relatedProductEmailConsent: false,
      },
      user: {
        optionalFields: {
          role: {
            value: '',
          },
        },
        requestNextStep: false,
        requiredFields: {
          email: {
            isValid: false,
            value: '',
          },
          name: {
            isValid: false,
            value: '',
          },
          password: {
            isValid: false,
            value: '',
          },
        },
      },
    })
  })

  describe('UPDATE_REQUIRED_USER_FIELD', () => {
    it('updates the key that matches the name, with the given value', () => {
      const state = undefined
      const action = {
        type: 'UPDATE_REQUIRED_USER_FIELD',
        payload: { name: 'name', value: 'Bob' },
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.user).toEqual({
        optionalFields: {
          role: {
            value: '',
          },
        },
        requestNextStep: false,
        requiredFields: {
          email: {
            isValid: false,
            value: '',
          },
          name: {
            isValid: true,
            value: 'Bob',
          },
          password: {
            isValid: false,
            value: '',
          },
        },
      })
    })
  })

  describe('UPDATE_OPTIONAL_USER_FIELD', () => {
    it('updates the key that matches the name, with the given value', () => {
      const state = undefined
      const action = {
        type: 'UPDATE_OPTIONAL_USER_FIELD',
        payload: { name: 'role', value: 'chief cheese' },
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.user).toEqual({
        optionalFields: {
          role: {
            value: 'chief cheese',
          },
        },
        requestNextStep: false,
        requiredFields: {
          email: {
            isValid: false,
            value: '',
          },
          name: {
            isValid: false,
            value: '',
          },
          password: {
            isValid: false,
            value: '',
          },
        },
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
