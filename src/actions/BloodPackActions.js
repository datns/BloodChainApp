import { BloodPackTypes } from '../types';

const getBloodPacks = page => ({
  type: BloodPackTypes.GET_BLOOD_PACKS, page
})

export { getBloodPacks }