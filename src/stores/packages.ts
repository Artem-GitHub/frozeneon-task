import { ref } from 'vue'
import { defineStore } from 'pinia'
import { packagesService } from '@/services'
import type { AxiosResponse } from 'axios'
import type { PackageModel, PackageStatsModel } from '@/types'

export const usePackagesStore = defineStore('packages', () => {
  const packageName = ref<string>('')
  const packages = ref<PackageModel | null>(null)
  const packageStats = ref<PackageStatsModel | null>(null)
  const packageLoading = ref<boolean>(false)
  const packageStatsLoading = ref<boolean>(false)

  async function getPackageByName (name: string): Promise<void> {
    try {
      packageLoading.value = true
      const response: AxiosResponse = await packagesService.getPackageByName(name)
      packages.value = response.data
    } catch (error) {
      packages.value = null
      console.error(error)
    } finally {
      packageLoading.value = false
    }
  }

  async function getPackageStats (name: string, version: string): Promise<void> {
    try {
      packageStatsLoading.value = true
      const response: AxiosResponse = await packagesService.getPackageStats(name, version)
      packageStats.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      packageStatsLoading.value = false
    }
  }

  return {
    packageName,
    packages,
    packageStats,
    getPackageByName,
    getPackageStats,
    packageLoading,
    packageStatsLoading
  }
})
