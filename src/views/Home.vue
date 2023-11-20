<script setup lang="ts">
import SearchField from '@/components/SearchField.vue'
import MainInfo from '@/components/MainInfo.vue'
import DataTable from '@/components/DataTable.vue'
import AppModal from '@/components/AppModal.vue'
import TheFooter from '@/components/TheFooter.vue'
import { ref, computed, watch } from 'vue'
import { usePackagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'
import { useDebounce } from '@/composables/helpers'
import type { DataTableHeaders } from '@/types'

const appModal = ref<InstanceType<typeof AppModal> | null>(null)
const packagesStore = usePackagesStore()
const { getPackageByName } = packagesStore
const {
  packageName,
  packages,
  packageLoading
} = storeToRefs(packagesStore)

const tableHeaders: DataTableHeaders = [{
  title: 'Version',
  sortable: false,
  key: 'version'
}]

const searchPackageByName = useDebounce(getPackageByName, 1000)

const noDataText = computed<string>(() => {
  if (!packageName.value && !packages.value)
    return 'Data not found, please enter the package name in the search'
  else return `${packageName.value} package not found`
})

watch(packageName, newValue => {
  if (!packageLoading.value) packageLoading.value = true
  searchPackageByName(newValue)
})

function openAppModal (item: any, row: any): void {
  appModal.value?.openModal(row.item.version)
}
</script>

<template>
  <div class="home bg-background-main pa-8">
    <div class="home__search">
      <SearchField v-model="packageName" />
    </div>

    <MainInfo />

    <DataTable
      :headers="tableHeaders"
      :items="packages?.versions"
      :no-data-text="noDataText"
      :loading="packageLoading"
      @on-row-click="openAppModal"
    />

    <AppModal ref="appModal" />
  </div>

  <TheFooter />
</template>

<style lang="sass">
.home
  display: flex
  flex-direction: column
  min-height: calc(100vh - 120px)

  &__search
    width: 100%
    max-width: 560px
    align-self: center
</style>
