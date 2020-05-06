import { validate } from './validate'

describe('validate', () => {
  it('given a name, checks it has a length', () => {
    expect(validate('name', 'Bob')).toBe(true)
    expect(validate('name', '')).toBe(false)
  })

  it('given an email, checks it has a valid format', () => {
    expect(validate('email', 'bob@gmail.com')).toBe(true)
    expect(validate('email', '')).toBe(false)
    expect(validate('email', 'bobgmail.com')).toBe(false)
    expect(validate('email', 'bob@gmailcom')).toBe(false)
  })

  it('given a password, checks it has least 10 characters including one uppercase letter, one lowercase letter and a number', () => {
    expect(validate('password', 'Passw0rddd')).toBe(true)
    expect(validate('password', '')).toBe(false)
    expect(validate('password', 'Passw0rdd')).toBe(false)
    expect(validate('password', 'passw0rddd')).toBe(false)
    expect(validate('password', 'Passworddd')).toBe(false)
    expect(validate('password', 'PASSW0RDDD')).toBe(false)
  })
})
