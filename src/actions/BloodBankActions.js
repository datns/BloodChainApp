import { BloodBankTypes } from '../types';

const getBloodBanks = () => ({
  type: BloodBankTypes.GET_BLOOD_BANKS
})

const getNearbyBloodBanks = (position) => ({
  type: BloodBankTypes.GET_NEARBY_BLOOD_BANKS, position
})
export { getBloodBanks, getNearbyBloodBanks }