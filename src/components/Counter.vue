<script setup lang="ts">
import { defineProps, onUpdated } from 'vue'
interface Props {
  count: number
}

const props = defineProps<Props>()


// ライフサイクルの確認
onUpdated(() => {
  console.log(`The count is updated to ${props.count}.`)
})
</script>

<template>
  <v-sheet>現在のカウントは{{ props.count }}です</v-sheet>
</template>