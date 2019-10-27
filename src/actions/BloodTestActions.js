import { BloodTestTypes } from '../types';

const getBloodTests = (page) => ({
  type: BloodTestTypes.GET_BLOOD_TESTS, page
})

const getNearbyBloodTests = (position) => ({
  type: BloodTestTypes.GET_NEARBY_BLOOD_TESTS, position
})

const getBloodTestsByName = (name) => ({
  type: BloodTestTypes.GET_BLOOD_TESTS_BY_NAME, name
})

export { getBloodTests, getNearbyBloodTests, getBloodTestsByName }