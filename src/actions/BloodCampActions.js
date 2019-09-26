import { BloodCampTypes } from '../types';

const getBloodCamps = () => ({
  type: BloodCampTypes.GET_BLOOD_CAMPS
})

const getNearbyBloodCamps = (position) => ({
  type: BloodCampTypes.GET_NEARBY_BLOOD_CAMPS, position
})

export { getBloodCamps, getNearbyBloodCamps }