<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Box',
  data () {
    return {
      estilos: {
        backgroundColor: '#f9f6f6'
      }
    }
  }
})
</script>
