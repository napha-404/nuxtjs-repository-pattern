import { Plugin } from '@nuxt/types'
import { Repository, IRepository } from '~/repositories/Repository'

declare module '@nuxt/types' {
  interface Context {
    $repositories(): IRepository
  }
}

const repositoriesPlugin: Plugin = (context, inject) => {
  inject('repositories', new Repository(context.$axios))
}

export default repositoriesPlugin
