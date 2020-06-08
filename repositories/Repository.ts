import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { UserRepository, IUserRepository } from '~/repositories/UserRepository'
import { TodoRepository, ITodoRepository } from '~/repositories/TodoRepository'
export interface IRepository {
  user: IUserRepository
  todo: ITodoRepository
}

export class Repository implements IRepository {
  user: IUserRepository
  todo: ITodoRepository
  constructor($axios: NuxtAxiosInstance) {
    this.user = new UserRepository($axios)
    this.todo = new TodoRepository($axios)
  }
}
