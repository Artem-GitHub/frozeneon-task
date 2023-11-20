<script setup lang="ts">
import { ref } from 'vue'
import { usePackagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'
import { useDateFormater } from '@/composables/helpers'

const isOpenModal = ref<boolean>(false)
const packageVersion = ref<string>('')

const packagesStore = usePackagesStore()
const { getPackageStats } = packagesStore
const {
  packageName,
  packageStats,
  packageStatsLoading
} = storeToRefs(packagesStore)

function openModal (version: string): void {
  getPackageStats(packageName.value, version)
  packageVersion.value = version
  isOpenModal.value = true
}

function closeModal (): void {
  isOpenModal.value = false
  setTimeout(() => packageStats.value = null, 200)
}

defineExpose({ openModal })
</script>

<template>
  <v-dialog
    v-model="isOpenModal"
    class="app-modal"
    content-class="align-center"
  >
    <div class="app-modal__inner bg-background-main px-8 py-4">
      <div class="d-flex justify-space-between mb-8">
        <h3>Stats {{ packageName + '@' +  packageVersion }}</h3>

        <v-btn
          variant="text"
          icon="mdi-close"
          size="32"
          bg-color="background-main"
          @click="closeModal"
        />
      </div>

      <div class="app-modal__body">
        <template v-if="packageStatsLoading">
          <div class="d-flex justify-center">
            <v-progress-circular
              indeterminate
              color="white"
            ></v-progress-circular>
          </div>
        </template>

        <template v-else>
          <div class="mb-4">
            <div class="app-modal__hits mb-4">
              <span>Hits: </span>
              <span>{{ packageStats?.hits?.total }}</span>
            </div>

            <div class="app-modal__dates">
              <div
                v-for="item, index in packageStats?.hits?.dates"
                :key="index"
                class="app-modal__dates-row"
              >
                <span>{{ useDateFormater(String(index)) }}: </span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <div>
            <div class="app-modal__hits mb-4">
              <span>Bandwidth: </span>
              <span>{{ packageStats?.bandwidth?.total }}</span>
            </div>

            <div class="app-modal__dates">
              <div
                v-for="item, index in packageStats?.bandwidth?.dates"
                :key="index"
                class="app-modal__dates-row"
              >
                <span>{{ useDateFormater(String(index)) }}: </span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="sass" scoped>
.app-modal
  width: 100%
  max-width: 680px

  &__inner
    display: flex
    flex-direction: column
    width: 100%
    border-radius: 6px
    max-height: 90vh

  &__body
    display: flex
    flex-direction: column
    overflow-y: auto

  &__hits
    display: flex
    justify-content: space-between
    border-bottom: solid 1px white

  &__dates
    display: grid
    grid-column-gap: 24px
    grid-template-columns: 1fr

    @include media-breakpoint-up(xs)
      grid-template-columns: 1fr 1fr

    &-row
      display: flex
      justify-content: space-between
      font-size: 12px
</style>
