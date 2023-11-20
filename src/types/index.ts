import type { VDataTable } from 'vuetify/lib/components/index.mjs'

type ParamsType = {
  [key: string]: string
}

interface ApiInterface {
  get (url?: string, params?: ParamsType): Promise<any>
}

type PackageModel = {
  links: { [key: string]: string },
  name: string,
  tags: { [key: string]: string },
  type: string,
  versions: { [key: string]: any }[]
}

type PackageStatsModel = {
  hits: { [key: string]: any },
  bandwidth: { [key: string]: any },
  links: { [key: string]: any }
}

type DataTableHeaders = InstanceType<typeof VDataTable>['headers']

export type {
  ParamsType,
  ApiInterface,
  PackageModel,
  PackageStatsModel,
  DataTableHeaders
}
