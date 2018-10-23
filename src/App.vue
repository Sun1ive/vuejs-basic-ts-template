<template>
  <div>
    <ul 
      v-for="arr in array"
      :key="arr"
    >
      <li class="testing">{{ arr }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  array: string[] = ['hello', 'world', 'my', 'new array item'];
}
</script>


<style>
div {
  font-size: 12px;
  color: red;
}
</style>
