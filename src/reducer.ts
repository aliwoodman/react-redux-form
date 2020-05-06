import { createStore } from 'redux'
import { PrivacyState, UserState } from './types'
import { validate } from './validate'

export type State = {
  user: UserState
  privacy: PrivacyState
}

const initialState: State = {
  user: {
    requiredFields: {
      name: { value: '', isValid: false },
      password: { value: '', isValid: false },
      email: { value: '', isValid: false },
    },
    optionalFields: {
      role: { value: '' },
    },
    requestNextStep: false,
  },
  privacy: {
    currentProductEmailConsent: false,
    relatedProductEmailConsent: false,
  },
}

export const reducer = function (state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_REQUIRED_USER_FIELD': {
      return {
        ...state,
        user: {
          ...state.user,
          requiredFields: {
            ...state.user.requiredFields,
            [action.payload.name]: {
              value: action.payload.value,
              isValid: validate(action.payload.name, action.payload.value),
            },
          },
        },
      }
    }
    case 'UPDATE_OPTIONAL_USER_FIELD': {
      return {
        ...state,
        user: {
          ...state.user,
          optionalFields: {
            ...state.user.optionalFields,
            [action.payload.name]: {
              value: action.payload.value,
            },
          },
        },
      }
    }
    case 'UPDATE_REQUEST_NEXT_STEP': {
      return {
        ...state,
        user: {
          ...state.user,
          requestNextStep: action.payload,
        },
      }
    }
    case 'UPDATE_PRIVACY': {
      return {
        ...state,
        privacy: {
          ...state.privacy,
          [action.payload.name]: action.payload.value,
        },
      }
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
