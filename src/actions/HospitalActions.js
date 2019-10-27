import { HospitalTypes } from '../types';

const getHospitals = (page) => ({
  type: HospitalTypes.GET_HOSPITALS, page
})

const getNearbyHospitals = (position) => ({
  type: HospitalTypes.GET_NEARBY_HOSPITALS, position
})

const getHospitalsByName = (name) => ({
  type: HospitalTypes.GET_HOSPITALS_BY_NAME, name
})

export { getHospitals, getNearbyHospitals, getHospitalsByName }