import { BloodPackTypes } from '../types';

const getBloodPacks = page => ({
  type: BloodPackTypes.GET_BLOOD_PACKS, page
})

const getTransferHistories = id => ({
  type: BloodPackTypes.GET_TRANSFER_HISTORIES, id
})

export { getBloodPacks, getTransferHistories }