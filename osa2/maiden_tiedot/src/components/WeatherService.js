import axios from 'axios'
const baseUrl = 'http://api.weatherstack.com/current'
const apiKey = '0725d7ecfd0020a3a7aafad1f34fd28d'

const getCurrent = (city) => {
  const request = axios.get(`${baseUrl}?access_key=${apiKey}&query=${city}`)
  return request.then(response => response.data)
}

export default { getCurrent }
