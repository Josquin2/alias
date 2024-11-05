import axios, { type AxiosResponse } from 'axios'

export class Api {
  protected readonly url: string
  constructor() {
    this.url = import.meta.env.VITE_API_URL || ''
  }

  private async request(method: string, endpoint: string, body?: object): Promise<any> {
    try {
      const response = await axios.request({
        method,
        url: `${this.url}/${endpoint}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return { data: response.data, status: response.status }
    } catch (error: any) {
      return { data: 'error', status: error.status }
    }
  }

  async getObjects(endpoint: string): Promise<any> {
    return this.request('get', endpoint)
  }

  async post(endpoint: string, body: object): Promise<any> {
    return this.request('post', endpoint, body)
  }

  async put(endpoint: string, body: object): Promise<any> {
    return this.request('put', endpoint, body)
  }
  async delete(endpoint: string): Promise<any> {
    return this.request('delete', endpoint)
  }
}
