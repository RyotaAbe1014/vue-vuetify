<script setup lang="ts">
import { provide, ref, Ref, readonly, onMounted } from "vue"
import axios, { AxiosResponse } from "axios"
import { getDogInjectionKey } from "../../keys";
import GetDogButton from "../atoms/GetDogButton.vue";

interface Data {
  message: string;
  status: string;
}


const url: string = "https://dog.ceo/api/breeds/image/random"
const data: Ref<Data> = ref({ message: "", status: "" })

const getData = async (): Promise<void> => {
  const res: AxiosResponse = await axios.get(url)
  data.value = res.data
}

provide(getDogInjectionKey, getData)

onMounted(() => {
  getData()
})

</script>
<template>
  <div>
    <h1>AxiosTest</h1>
    <GetDogButton />
    <v-card>
      <v-img :src="data.message" />
    </v-card>
  </div>
</template>