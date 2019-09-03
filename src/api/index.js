import axios from 'axios'

const create = () => {
  const api = axios.create({
    baseURL: 'http://192.168.1.7:3000/api/',
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  const login = (username, password) => api.post('auth/login', { username, password })

  return {
    login
  }
}

export default { create }

