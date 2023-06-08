<template>
  <button class="c-button">
    <slot name="default"></slot>
  </button>
</template>

<script setup lang="ts">
// import {com} from 'module';

const props = defineProps({
  type: String
})


console.log(props.type);

</script>

<style scoped>
button{
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color .25s;
  line-height: normal;
}
button:hover{
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>