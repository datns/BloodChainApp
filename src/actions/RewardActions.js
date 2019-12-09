import { RewardTypes } from '../types';

const getVouchers = () => ({
  type: RewardTypes.GET_VOUCHERS
})

const getEthereums = () => ({
  type: RewardTypes.GET_ETHEREUMS
})

export { getVouchers, getEthereums }