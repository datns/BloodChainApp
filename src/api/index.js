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

  return {
    login,
    setAccessToken,
    getCampaigns
  }
}

export default { create }

