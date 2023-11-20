<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
}>(), { modelValue: '' })

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const value = computed<string>({
  get () {
    return props.modelValue
  },
  set (newValue: string) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <v-text-field
    v-model.trim="value"
    label="Search package by name"
    variant="outlined"
    density="compact"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>
