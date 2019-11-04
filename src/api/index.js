import axios from 'axios'

const create = () => {
  const api = axios.create({
    baseURL: 'http://192.168.1.7:3000/api/',
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

  return {
    login,
    setAccessToken,
    getCampaigns,
    getBloodBanks,
    getBloodCamps,
    getBloodSeparations,
    getBloodTests,
    getHospitals,
    getUserInfo
  }
}

export default { create }

