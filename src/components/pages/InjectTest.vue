<script setup lang="ts">
import { userNameInjectionKey, userNameReactiveInjectionKey } from "../../keys";
import { provide, ref, Ref, readonly } from "vue"
import InjectTestTextForm from "../molecules/InjectTestTextForm.vue";
// グローバルに管理する値を定義
const userName: Ref<string> = ref("")

// 更新用の関数
const onChangeUserName = (e: Event): void => {
  userName.value = (e.target as HTMLInputElement).value
}

// グローバルに値を提供
// InjectTest.vueの子コンポーネントであれば、
// inject(myInjectionKey)で値を取得できる
provide(userNameInjectionKey, readonly(userName))

provide(userNameReactiveInjectionKey, onChangeUserName)
</script>
<template>
  <div>
    <h1>InjectTest</h1>
    <InjectTestTextForm />
  </div>
</template>