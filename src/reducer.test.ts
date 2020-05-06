import { reducer } from './reducer'

describe('reducer', () => {
  it('sets the initial state', () => {
    const state = undefined
    const action = {}

    const reducedState = reducer(state, action as any)
    expect(reducedState).toEqual({
      user: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
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
        payload: { name: 'password', value: 'pw' },
      }

      const reducedState = reducer(state, action as any)
      expect(reducedState.user).toEqual({
        email: '',
        firstName: '',
        lastName: '',
        password: 'pw',
      })
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
