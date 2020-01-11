import {
  AuthTypes,
  CampaignTypes,
  BloodCampTypes,
  BloodBankTypes,
  BloodSeparationTypes,
  BloodTestTypes,
  HospitalTypes,
  UserTypes,
  BloodPackTypes,
  RewardTypes,
} from '../types';

import { login, relogin } from './AuthSaga';
import { getCampaigns, getCampaignsByName } from './CampaignSaga';
import { getBloodCamps, getNearbyBloodCamps, getBloodCampsByName, getBloodCampDetail } from './BloodCampSaga';
import { getBloodBanks, getNearbyBloodBanks, getBloodBanksByName } from './BloodBankSaga';
import { getBloodTests, getNearbyBloodTests, getBloodTestsByName } from './BloodTestSaga';
import { getBloodSeparations, getNearbyBloodSeparations, getBloodSeparationsByName } from './BloodSeparationSaga';
import { getHospitals, getNearbyHospitals, getHospitalsByName } from './HospitalSaga';
import { getUserInfo, getUserPoint, getPointHistories, setLanguage } from './UserSaga';
import { getBloodPacks, getTransferHistories } from './BloodPackSaga';
import { getVouchers, getEthereums, redeemVoucher, redeemEthereum } from './RewardSaga';

import { takeLatest, all } from '@redux-saga/core/effects';

import API from '../api';

const api = API.create();

export default function* root() {
  yield all([
    takeLatest(AuthTypes.LOGIN, login, api),
    takeLatest(AuthTypes.RELOGIN, relogin, api),
    takeLatest(CampaignTypes.GET_CAMPAIGNS, getCampaigns, api),
    takeLatest(CampaignTypes.GET_CAMPAIGNS_BY_NAME, getCampaignsByName, api),

    takeLatest(BloodCampTypes.GET_BLOOD_CAMPS, getBloodCamps, api),
    takeLatest(BloodCampTypes.GET_NEARBY_BLOOD_CAMPS, getNearbyBloodCamps, api),
    takeLatest(BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME, getBloodCampsByName, api),
    takeLatest(BloodCampTypes.GET_BLOOD_CAMP_DETAIL, getBloodCampDetail, api),

    takeLatest(BloodBankTypes.GET_BLOOD_BANKS, getBloodBanks, api),
    takeLatest(BloodBankTypes.GET_NEARBY_BLOOD_BANKS, getNearbyBloodBanks, api),
    takeLatest(BloodBankTypes.GET_BLOOD_BANKS_BY_NAME, getBloodBanksByName, api),

    takeLatest(BloodTestTypes.GET_BLOOD_TESTS, getBloodTests, api),
    takeLatest(BloodTestTypes.GET_NEARBY_BLOOD_TESTS, getNearbyBloodTests, api),
    takeLatest(BloodTestTypes.GET_BLOOD_TESTS_BY_NAME, getBloodTestsByName, api),

    takeLatest(BloodSeparationTypes.GET_BLOOD_SEPARATIONS, getBloodSeparations, api),
    takeLatest(BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS, getNearbyBloodSeparations, api),
    takeLatest(BloodSeparationTypes.GET_BLOOD_SEPARATION_BY_NAME, getBloodSeparationsByName, api),

    takeLatest(HospitalTypes.GET_HOSPITALS, getHospitals, api),
    takeLatest(HospitalTypes.GET_NEARBY_HOSPITALS, getNearbyHospitals, api),
    takeLatest(HospitalTypes.GET_HOSPITALS_BY_NAME, getHospitalsByName, api),

    takeLatest(UserTypes.GET_USER_INFO, getUserInfo, api),
    takeLatest(UserTypes.GET_USER_POINT, getUserPoint, api),
    takeLatest(UserTypes.GET_POINTS_HISTORIES, getPointHistories, api),
    takeLatest(UserTypes.SET_LANGUAGE, setLanguage, api),

    takeLatest(BloodPackTypes.GET_BLOOD_PACKS, getBloodPacks, api),
    takeLatest(BloodPackTypes.GET_TRANSFER_HISTORIES, getTransferHistories, api),

    takeLatest(RewardTypes.GET_VOUCHERS, getVouchers, api),
    takeLatest(RewardTypes.GET_ETHEREUMS, getEthereums, api),
    takeLatest(RewardTypes.REDEEM_VOUCHER, redeemVoucher, api),
    takeLatest(RewardTypes.REDEEM_ETHEREUM, redeemEthereum, api),

  ])
}