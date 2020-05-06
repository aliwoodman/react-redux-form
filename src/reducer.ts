import { createStore } from 'redux'
import { PrivacyState, UserState } from './types'

export type IState = {
  user: UserState
  privacy: PrivacyState
}

const initialState: IState = {
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

const checkValidity = (name: string, value: string) => {
  switch (name) {
    case 'name': {
      return !!value.length
    }
    case 'email': {
      return !!value.length
    }
    case 'password': {
      return !!value.length
    }
  }
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
              isValid: checkValidity(action.payload.name, action.payload.value),
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
