<template>
  <div class="affix-span">
    <div class="affix">
      <slot name="prefix">
        {{ props.prefix }}
      </slot>
    </div>
    
    <div class="span">
      <slot>
        
      </slot>
    </div>
    <div class="affix">
      <slot name="prefix">
        {{ props.suffix }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    prefix: {
      type: String
    },
    suffix: {
      type: String
    }
  })
</script>


<style scoped>
.affix-span{
  display: flex;
  align-items: center;
  line-height: 2;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 5px;
}
.affix{
  
}
.span{
  flex: 1;
  width: 0;
}
</style>