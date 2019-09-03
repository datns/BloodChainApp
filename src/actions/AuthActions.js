import { AuthTypes } from '../types';

const login = (username, password) => ({
  type: AuthTypes.LOGIN, username, password
})

export { login }