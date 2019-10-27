import { BloodCampTypes } from '../types';

const getBloodCamps = (page) => ({
  type: BloodCampTypes.GET_BLOOD_CAMPS, page
})

const getNearbyBloodCamps = (position) => ({
  type: BloodCampTypes.GET_NEARBY_BLOOD_CAMPS, position
})

const getBloodCampsByName = (name) => ({
  type: BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME, name
})

export { getBloodCamps, getNearbyBloodCamps, getBloodCampsByName }