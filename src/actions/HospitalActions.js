import { HospitalTypes } from '../types';

const getHospitals = () => ({
  type: HospitalTypes.GET_HOSPITALS
})

const getNearbyHospitals = (position) => ({
  type: HospitalTypes.GET_NEARBY_HOSPITALS, position
})

export { getHospitals, getNearbyHospitals }