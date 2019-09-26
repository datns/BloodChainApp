import { BloodSeparationTypes } from '../types';

const getBloodSeparations = () => ({
  type: BloodSeparationTypes.GET_BLOOD_SEPARATIONS
})

const getNearbyBloodSeparations = (position) => ({
  type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS, position
})

export { getBloodSeparations, getNearbyBloodSeparations }