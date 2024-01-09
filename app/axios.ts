import axios from 'axios'

let link = ''

if (typeof window !== 'undefined') {
  link = window.ENV.AXIOS_URL
}

console.log(process.env.AXIOS_URL)
const instance = axios.create({
  baseURL: link,
})

export default instance
