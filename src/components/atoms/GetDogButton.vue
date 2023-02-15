<script setup lang="ts">
import { inject } from "vue"
import { getDogInjectionKey } from "../../keys";

const getData = inject(getDogInjectionKey) as () => Promise<void>
</script>

<template>
  <v-btn @Click="getData()">取得</v-btn>
</template>