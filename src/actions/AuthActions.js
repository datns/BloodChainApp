import { AuthTypes } from '../types';

const login = (username, password) => ({
  type: AuthTypes.LOGIN, username, password
})

const relogin = (accessToken) => ({
  type: AuthTypes.RELOGIN, accessToken
})

export { login, relogin }