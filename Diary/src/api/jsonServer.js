import axios from 'axios'

export default axios.create({
  // this base URL will change each time you run npm run tunnel,
  // be sure to update this here!
  baseURL: 'https://1c7b-216-165-95-191.ngrok-free.app',
})
