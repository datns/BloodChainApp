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
import { getBloodCamps } from './BloodCampSaga';
import { getBloodBanks } from './BloodBankSaga';
import { getBloodTests } from './BloodTestSaga';
import { getBloodSeparations } from './BloodSeparationSaga';
import { getHospitals } from './HospitalSaga';

import { takeLatest, all } from '@redux-saga/core/effects';

import API from '../api';

const api = API.create();

export default function* root() {
  yield all([
    takeLatest(AuthTypes.LOGIN, login, api),
    takeLatest(CampaignTypes.GET_CAMPAIGNS, getCampaigns, api),
    takeLatest(BloodCampTypes.GET_BLOOD_CAMPS, getBloodCamps, api),
    takeLatest(BloodBankTypes.GET_BLOOD_BANKS, getBloodBanks, api),
    takeLatest(BloodTestTypes.GET_BLOOD_TESTS, getBloodTests, api),
    takeLatest(BloodSeparationTypes.GET_BLOOD_SEPARATIONS, getBloodSeparations, api),
    takeLatest(HospitalTypes.GET_HOSPITALS, getHospitals, api)
  ])
}