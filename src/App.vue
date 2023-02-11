<script setup lang="ts">
import { Ref, ref, onMounted } from 'vue'
import CountUpButton from './components/CountUpButton.vue';
import Counter from './components/Counter.vue';

// リアクティブな状態
// ref() でラップすることで、リアクティブな状態になる(変更を検知できる)
// 型付けは Ref<number>　のようにRefを使う
const count: Ref<number> = ref(0)

// これはリアクティブではない(変更が検知できない)
// const notCount = 0

const disabled: Ref<boolean> = ref(true)

// リアクティブな状態を変更する関数
const increment = (): void => {
  count.value++
  // 10で割り切れるときにアラートを出す
  // 三項演算子で書くとこうなる
  disabled.value = count.value % 10 === 0 ? false : true
}

// typeで型を定義する
type Item = {
  title: string;
  icon: string;
}

// interfaceで型を定義する
// interface Item {
//   title: string;
//   icon: string;
// }

// TypeScript で定義した配列
const items: Array<Item> = [
  { title: 'Home', icon: 'mdi-home' },
  { title: 'About', icon: 'mdi-account' },
  { title: 'Contact', icon: 'mdi-email' },
]


// ライフサイクルフック (コンポーネントがマウントされたときに実行される)
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

// ライフサイクルフック (コンポーネントがアンマウントされるときに実行される)
// onUnmounted(() => {
//   console.log(`The final count is ${count.value}.`)
// })

// ライフサイクルフック (コンポーネントが更新されるときに実行される)
// onUpdated(() => {
//   console.log(`The count is updated to ${count.value}.`)
// })

// ライフサイクルフック (コンポーネントが更新される前に実行される)
// onBeforeUpdate(() => {
//   console.log(`The count is going to be updated to ${count.value}.`)
// })

// ライフサイクルフック (コンポーネントが再描画されるときに実行される)
// onRenderTracked(() => {
//   console.log(`The count is going to be updated to ${count.value}.`)
// })

// ライフサイクルフック (コンポーネントが再描画される前に実行される)
// onRenderTriggered(() => {
//   console.log(`The count is going to be updated to ${count.value}.`)
// })
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar title="Application bar" color="black"></v-app-bar>
      <v-navigation-drawer>
        <v-list>
          <div v-for="item in items" :key="item.title">
            <v-list-item :title="item.title" :prepend-icon="item.icon" :value="item.title"></v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1>カウンターテスト</h1>
              <Counter :count="count" />
              <CountUpButton :count="count" :increment="increment" />
              <p>{{ disabled }}</p>
              <v-alert v-if="!disabled" type="success">10で割り切れるときにアラートが出ます</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>