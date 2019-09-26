import {
  AuthTypes,
  CampaignTypes,
  BloodCampTypes,
  BloodBankTypes,
  BloodSeparationTypes,
  BloodTestTypes,
  HospitalTypes
} from '../types';

import { login } from './AuthSaga';
import { getCampaigns } from './CampaignSaga';
import { getBloodCamps, getNearbyBloodCamps } from './BloodCampSaga';
import { getBloodBanks, getNearbyBloodBanks } from './BloodBankSaga';
import { getBloodTests, getNearbyBloodTests } from './BloodTestSaga';
import { getBloodSeparations, getNearbyBloodSeparations } from './BloodSeparationSaga';
import { getHospitals, getNearbyHospitals } from './HospitalSaga';

import { takeLatest, all } from '@redux-saga/core/effects';

import API from '../api';

const api = API.create();

export default function* root() {
  yield all([
    takeLatest(AuthTypes.LOGIN, login, api),
    takeLatest(CampaignTypes.GET_CAMPAIGNS, getCampaigns, api),

    takeLatest(BloodCampTypes.GET_BLOOD_CAMPS, getBloodCamps, api),
    takeLatest(BloodCampTypes.GET_NEARBY_BLOOD_CAMPS, getNearbyBloodCamps, api),

    takeLatest(BloodBankTypes.GET_BLOOD_BANKS, getBloodBanks, api),
    takeLatest(BloodBankTypes.GET_NEARBY_BLOOD_BANKS, getNearbyBloodBanks, api),

    takeLatest(BloodTestTypes.GET_BLOOD_TESTS, getBloodTests, api),
    takeLatest(BloodTestTypes.GET_NEARBY_BLOOD_TESTS, getNearbyBloodTests, api),

    takeLatest(BloodSeparationTypes.GET_BLOOD_SEPARATIONS, getBloodSeparations, api),
    takeLatest(BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS, getNearbyBloodSeparations, api),

    takeLatest(HospitalTypes.GET_HOSPITALS, getHospitals, api),
    takeLatest(HospitalTypes.GET_NEARBY_HOSPITALS, getNearbyHospitals, api),

  ])
}