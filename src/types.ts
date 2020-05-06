export type UserState = {
  password: { value: string; isValid: boolean }
  firstName: { value: string; isValid: boolean }
  lastName: { value: string; isValid: boolean }
  email: { value: string; isValid: boolean }
  requestNextStep: boolean
}

export type PrivacyState = {
  currentProductEmailConsent: boolean
  relatedProductEmailConsent: boolean
}
