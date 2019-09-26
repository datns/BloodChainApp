import { BloodTestTypes } from '../types';

const getBloodTests = () => ({
  type: BloodTestTypes.GET_BLOOD_TESTS
})

const getNearbyBloodTests = (position) => ({
  type: BloodTestTypes.GET_NEARBY_BLOOD_TESTS, position
})

export { getBloodTests, getNearbyBloodTests }