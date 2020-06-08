import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'

export interface ITodoRepository {
  all(): Promise<AxiosResponse>
  show(id: number): Promise<AxiosResponse>
}

export class TodoRepository implements ITodoRepository {
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
