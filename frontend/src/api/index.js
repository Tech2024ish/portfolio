import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

export const getProjects = () => api.get('/projects')
export const getSkills = () => api.get('/skills')
export const sendContact = (data) => api.post('/contact', data)
