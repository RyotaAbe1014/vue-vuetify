<script setup lang="ts">

interface Props {
  count: number
  increment: () => void
}

const props = defineProps<Props>()
</script>

<template>
  <v-btn @click="increment" color="teal-lighten-1" prepend-icon="mdi-numeric-positive-1">Increment</v-btn>
</template>