<script setup lang="ts">
import type { DataTableHeaders } from '@/types'

const props = withDefaults(defineProps<{
  headers?: DataTableHeaders,
  items?: any[],
  noDataText?: string,
  loading?: boolean
}>(), {
  items: () => [],
  loading: false
})

const emit = defineEmits<{ 'onRowClick': [item: any, row: any] }>()

function handleClick (item: any, row: any): void {
  emit('onRowClick', item, row)
}
</script>

<template>
  <v-data-table
    class="data-table bg-background-main"
    hover
    :headers="headers"
    :items="items"
    :no-data-text="noDataText"
    :loading="loading"
    color="white"
    @click:row="handleClick"
  />
</template>

<style lang="sass" scoped>
.data-table
  &.v-table
    flex: 1
    & :deep(.v-data-table-header__content)
      color: #ffffff

    & :deep(.v-data-table__td)
      border-color: #ffffff

    & :deep(.v-data-table__tr)
      & .v-data-table__td
        border-color: #ffffff
</style>
