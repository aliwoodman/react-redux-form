export const validate = (name: string, value: string) => {
  switch (name) {
    case 'name': {
      return !!value.length
    }
    case 'email': {
      return !!value.length && /\S+@\S+\.\S+/.test(value)
    }
    case 'password': {
      return value.length > 9 && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
    }
  }
}
