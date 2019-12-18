import axios from 'axios'

const create = () => {
  const api = axios.create({
    baseURL: 'https://bloodchain.herokuapp.com/api/',
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000
  });

  const login = (username, password) => api.post('auth/login', { username, password })

  const setAccessToken = token => api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const getCampaigns = (params) => api.get('campaigns', { params })

  const getBloodCamps = (params) => api.get('blood-camps', { params })

  const getBloodBanks = (params) => api.get('blood-banks', { params })

  const getBloodTests = (params) => api.get('blood-test-centers', { params })

  const getBloodSeparations = (params) => api.get('blood-separation-centers', { params })

  const getHospitals = (params) => api.get('hospitals', { params })

  const getUserInfo = () => api.get('auth/me')

  const getBloodPacks = (params) => api.get('blood-packs/my-blood-packs', { params })

  const getVouchers = (params) => api.get('rewards/public', { params })

  const getEthereumPlan = () => api.get('rewards/ethereum/plans');

  const getTransferHistories = (id) => api.get(`blood-packs/${id}/transfer-histories`);

  const getUserPoint = () => api.get('auth/me/user-info')

  const getPointHistories = () => api.get('auth/me/point-histories')

  return {
    login,
    setAccessToken,
    getCampaigns,
    getBloodBanks,
    getBloodCamps,
    getBloodSeparations,
    getBloodTests,
    getHospitals,
    getUserInfo,
    getBloodPacks,
    getVouchers,
    getEthereumPlan,
    getTransferHistories,
    getUserPoint,
    getPointHistories
  }
}

export default { create }

