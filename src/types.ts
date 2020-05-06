export type UserState = {
  requiredFields: {
    name: { value: string; isValid: boolean }
    password: { value: string; isValid: boolean }
    email: { value: string; isValid: boolean }
  }
  optionalFields: {
    role: { value: string }
  }
  requestNextStep: boolean
}

export type PrivacyState = {
  currentProductEmailConsent: boolean
  relatedProductEmailConsent: boolean
}
