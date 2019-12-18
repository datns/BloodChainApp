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

export { getUserInfo, getUserPoint, getPointHistories }