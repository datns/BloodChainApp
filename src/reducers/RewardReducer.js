import Immutable from 'seamless-immutable';
import { RewardTypes } from '../types';

const initialState = Immutable({
  vouchers: [],
  fetchingVoucher: false,
  errorVoucher: false,
  ethereums: [],
  fetchingEthereum: false,
  errorEthereum: false,
  redeemedVoucher: {},
  redeemVoucherFetching: false,
  redeemVoucherError: false,
  redeemedEthereum: {},
  redeemEthereumFetching: false,
  redeemEthereumError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case RewardTypes.GET_VOUCHERS:
      return state.merge({ fetchingVoucher: true })
    case RewardTypes.GET_VOUCHERS_SUCCESS:
      return state.merge({ fetchingVoucher: false, vouchers: action.vouchers, errorVoucher: false })
    case RewardTypes.GET_VOUCHERS_FAILURE:
      return state.merge({ fetchingVoucher: false, errorVoucher: true })

    case RewardTypes.GET_ETHEREUMS:
      return state.merge({ fetchingEthereum: true });
    case RewardTypes.GET_ETHEREUMS_SUCCESS:
      return state.merge({ fetchingEthereum: false, ethereums: action.ethereums, errorEthereum: false });
    case RewardTypes.GET_ETHEREUMS_FAILURE:
      return state.merge({ fetchingEthereum: false, errorEthereum: true })

    case RewardTypes.REDEEM_VOUCHER:
      return state.merge({ redeemVoucherFetching: true })
    case RewardTypes.REDEEM_VOUCHER_SUCCESS:
      return state.merge({ redeemVoucherFetching: false, redeemedVoucher: action.voucher, redeemVoucherError: false })
    case RewardTypes.REDEEM_VOUCHER_FAILURE:
      return state.merge({ redeemVoucherFetching: false, redeemVoucherError: true })

    case RewardTypes.REDEEM_ETHEREUM:
      return state.merge({ redeemEthereumFetching: true })
    case RewardTypes.REDEEM_ETHEREUM_SUCCESS:
      return state.merge({ redeemEthereumFetching: false, redeemedEthereum: action.ethereum, redeemEthereumError: false })
    case RewardTypes.REDEEM_ETHEREUM_FAILURE:
      return state.merge({ redeemEthereumFetching: false, redeemEthereumError: true })
    default: return state
  }
}