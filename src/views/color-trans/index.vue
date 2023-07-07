<script lang="ts">
export default {
  name: "ColorTrans",
};
</script>


<template>
  <div class="w-full p-[20px]">
    <div class=" h-[80vh] shadow-lg border border-gray-200 rounded-xl">
      <div class=" ">
        <a-select
          v-model:value="value"
          style="width: 120px"
          :options="opts"
          @change="handleChange"
        ></a-select>
        <span>-></span>
        <a-select
          v-model:value="value"
          style="width: 120px"
          :options="opts"
          @change="handleChange"
        ></a-select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { CColor } from '@/utils/color';

type Option = {
  label: string,
  value: any,
}

const opts = reactive<Option[]>([
  { label: 'test', value: 1},
  { label: 'test2', value: 2},
  { label: 'test3', value: 3},
  { label: 'test4', value: 4},
])

const value = ref<string>('33fr')

const handleChange = (val) => {
  console.log(val);
  console.log(2,value.value);
}

</script>





<style></style>