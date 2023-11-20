import type { ApiInterface } from '@/types'

export default abstract class CoreService {
  constructor (public api: ApiInterface) {}
}
