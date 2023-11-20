import axios from 'axios'
import type { AxiosResponse, AxiosInstance } from 'axios'
import type { ApiInterface } from '@/types'

export default class AxiosApi implements ApiInterface {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({ baseURL: import.meta.env.VITE_API })
  }

  get (url = '', params = {}): Promise<AxiosResponse> {
    return this.api.get(url, { params })
  }
}
