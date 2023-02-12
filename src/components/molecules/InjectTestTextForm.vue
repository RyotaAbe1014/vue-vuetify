<script setup lang="ts">
import { inject } from 'vue';
import InjectTestTextField from '../atoms/InjectTestTextField.vue';
import { userNameInjectionKey } from '../../keys.js'
const userName = inject(userNameInjectionKey);
</script>
<template>
  <p>userName: {{ userName }}</p>
  <InjectTestTextField />
</template>