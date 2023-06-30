<template>
  <div class="panel-with-more relative overflow-hidden mb-8">
    <slot></slot>  
    <div v-if="isFold" class=" absolute bottom-0 w-full text-center backdrop-blur-sm text-lg leading-10 ">
      <c-button type="text" @click="toggle">展开</c-button>
    </div>
    <!-- <span v-else @click="toggle" class=" sticky top-10">收起</span> -->
  </div>
</template>

<script setup lang="ts">
  import CButton from '@/components/CButton.vue';
  import { ref, computed} from 'vue';
  const isFold = ref<Boolean>(true)

  const toggle = () => {
    isFold.value = !isFold.value
  }

  const props = defineProps({
    max:{
      type: Number,
      default: 500
    }
  })

  const maxHeight = computed(() => {
    return isFold.value ? props.max + 'px' : 'initial'
  })
</script>

<style scoped>
.panel-with-more{
  max-height: v-bind(maxHeight);
}
</style>