import { UserTypes } from '../types';

const getUserInfo = () => ({
  type: UserTypes.GET_USER_INFO
})

const getUserPoint = () => ({
  type: UserTypes.GET_USER_POINT
})

const getPointHistories = () => ({
  type: UserTypes.GET_POINTS_HISTORIES
})

const setLanguage = language => ({
  type: UserTypes.SET_LANGUAGE, language
})

export { getUserInfo, getUserPoint, getPointHistories, setLanguage }