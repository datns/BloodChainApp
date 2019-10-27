import { BloodBankTypes } from '../types';

const getBloodBanks = (page) => ({
  type: BloodBankTypes.GET_BLOOD_BANKS, page
})

const getNearbyBloodBanks = (position) => ({
  type: BloodBankTypes.GET_NEARBY_BLOOD_BANKS, position
})

const getBloodBanksByName = (name) => ({
  type: BloodBankTypes.GET_BLOOD_BANKS_BY_NAME, name
})
export { getBloodBanks, getNearbyBloodBanks, getBloodBanksByName }