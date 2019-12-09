import Immutable from 'seamless-immutable';
import { RewardTypes } from '../types';

const initialState = Immutable({
  vouchers: [],
  fetchingVoucher: false,
  errorVoucher: false,
  ethereums: [],
  fetchingEthereum: false,
  errorEthereum: false
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
    default: return state
  }
}