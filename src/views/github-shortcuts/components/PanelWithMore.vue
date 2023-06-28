<template>
  <div class="panel-with-more relative overflow-hidden">
    <slot></slot>  
    <div v-if="isFold" @click="toggle" class=" absolute bottom-0">展开</div>
    <span v-else @click="toggle" class=" sticky top-10">收起</span>
  </div>
</template>

<script setup lang="ts">
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