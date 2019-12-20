import { RewardTypes } from '../types';

const getVouchers = () => ({
  type: RewardTypes.GET_VOUCHERS
})

const getEthereums = () => ({
  type: RewardTypes.GET_ETHEREUMS
})

const redeemVoucher = (id) => ({
  type: RewardTypes.REDEEM_VOUCHER, id
})

const redeemEthereum = (planName, address) => ({
  type: RewardTypes.REDEEM_ETHEREUM, planName, address
})

export { getVouchers, getEthereums, redeemVoucher, redeemEthereum }