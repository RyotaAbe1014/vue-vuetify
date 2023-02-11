<script setup lang="ts">

interface Props {
  count: number
  increment: () => void
}

const props = defineProps<Props>()
</script>

<template>
  <v-btn @click="increment">Increment</v-btn>
</template>