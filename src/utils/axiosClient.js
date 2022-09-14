import axios from 'axios'

const { REACT_APP_BASE_URL, REACT_APP_Authorization } = process.env
const defaultClient = axios.create({ baseURL: REACT_APP_BASE_URL })

// const netflixClient = axios.create({ baseURL: REACT_APP_NETFLIX_URL })

export default function request({ ...options }) {
  // defaultClient.defaults.headers.common.Authorization = REACT_APP_Authorization

  return defaultClient(options)
}

export function netflixRequest({ ...options }) {
  // defaultClient.defaults.headers.common.Authorization = REACT_APP_NETFLIX_Authorization

  return defaultClient(options)
}
