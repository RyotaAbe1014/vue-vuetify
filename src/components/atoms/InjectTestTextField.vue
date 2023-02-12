<script setup lang="ts">
import { inject } from 'vue';
import { userNameInjectionKey, userNameReactiveInjectionKey } from '../../keys.js'
const userName = inject(userNameInjectionKey);
const onChangeUserName = inject(userNameReactiveInjectionKey);
</script>
<template>
  <v-text-field @input="onChangeUserName" :counter="10" label="First name" required></v-text-field>
</template>