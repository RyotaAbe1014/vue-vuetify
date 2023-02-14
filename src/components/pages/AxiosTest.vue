<script setup lang="ts">
import { provide, ref, Ref, readonly, onMounted } from "vue"
import axios, { AxiosResponse } from "axios"

interface Data {
  message: string;
  status: string;
}

const url: string = "https://dog.ceo/api/breeds/image/random"
const data: Ref<Data> = ref({ message: "", status: "" })

const getData = async (): Promise<void> => {
  const res: AxiosResponse = await axios.get(url)
  data.value = res.data
  console.log(data.value)
}

onMounted(() => {
  getData()
})

</script>
<template>
  <div>
    <h1>AxiosTest</h1>
    <v-btn @Click="getData()">取得</v-btn>
    <v-card>
      <v-img :src="data.message" />
    </v-card>
  </div>
</template>