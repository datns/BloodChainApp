import { BloodSeparationTypes } from '../types';

const getBloodSeparations = (page) => ({
  type: BloodSeparationTypes.GET_BLOOD_SEPARATIONS, page
})

const getNearbyBloodSeparations = (position) => ({
  type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS, position
})

const getBloodSeparationsByName = (name) => ({
  type: BloodSeparationTypes.GET_BLOOD_SEPARATION_BY_NAME, name
})

export { getBloodSeparations, getNearbyBloodSeparations, getBloodSeparationsByName }