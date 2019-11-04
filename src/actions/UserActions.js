import { UserTypes } from '../types';

const getUserInfo = () => ({
  type: UserTypes.GET_USER_INFO
})

export { getUserInfo }