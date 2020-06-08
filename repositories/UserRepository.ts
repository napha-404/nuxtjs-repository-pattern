import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'

export interface IUserRepository {
  all(): Promise<AxiosResponse>
  show(id: number): Promise<AxiosResponse>
}

export class UserRepository implements IUserRepository {
  $axios: NuxtAxiosInstance
  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }
  public all(): Promise<AxiosResponse> {
    return this.$axios.get('')
  }
  public show(id: number): Promise<AxiosResponse> {
    return this.$axios.get(`/${id}`)
  }
}
