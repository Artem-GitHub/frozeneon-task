<script setup lang="ts">
import { usePackagesStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'

const { packages } = storeToRefs(usePackagesStore())
</script>

<template>
  <div class="my-6">
    <h3 class="mb-6">Package Info</h3>

    <v-row class="main-info__row">
      <div class="v-col-sm-6">
        <span>
          <strong>Name:</strong>
        </span>
        <span class="ml-4">{{ packages?.name }}</span>
      </div>
      <div class="v-col-sm-6">
        <span>
          <strong>Type:</strong>
        </span>
        <span class="ml-4">{{ packages?.type }}</span>
      </div>
    </v-row>

    <v-row class="main-info__row">
      <div class="v-col-sm-6">
        <span>
          <strong>Latest:</strong>
        </span>
        <span class="ml-4">{{ packages?.tags?.latest }}</span>
      </div>
    </v-row>
  </div>
</template>
