import CoreService from '@/services/core.service'
import type { ParamsType } from '@/types'

export default class PackagesService extends CoreService {
  getPackageByName (name: string = '', params?: ParamsType): Promise<any> {
    return this.api.get(`/packages/npm/${name}`, params)
  }

  getPackageStats (
    name: string = '',
    version: string = '',
    params?: ParamsType
  ): Promise<any> {
    return this.api.get(`/stats/packages/npm/${name}@${version}`, params)
  }
}
