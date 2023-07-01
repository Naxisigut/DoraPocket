<template>
  <div :loading="loading" class="panel-with-more relative overflow-hidden mb-8">
    <slot></slot>  
    <div v-if="isFold && ready" class=" absolute bottom-0 w-full text-center backdrop-blur-sm text-lg leading-10 ">
      <c-button type="text" @click="expand">展开</c-button>
    </div>
    <!-- <span v-else @click="toggle" class=" sticky top-10">收起</span> -->
  </div>
</template>

<script setup lang="ts">
  import CButton from '@/components/CButton.vue';
  import { ref, computed} from 'vue';

  const expand = () => {
    isFold.value = false
  }

  const isFold = computed({
    get(){
      return props.modelValue
    },
    set(val){
      emits('update:modelValue', val)
    }
  })

  const emits = defineEmits(['update:modelValue'])

  const props = defineProps({
    max:{
      type: Number,
      default: 500
    },
    modelValue:{
      type: Boolean,
      required: true
    },
    loading:{
      type: Boolean,
      default: false
    },
    ready:{
      type: Boolean,
      default: true
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