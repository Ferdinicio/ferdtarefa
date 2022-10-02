<template>
  <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
          <Box v-if="listaEstaVazia">
              Lista de tarefas vazia!
          </Box>
          <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
      </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue'
  import Tarefa from '../components/Tarefa.vue'
  import Box from '../components/Box.vue'
  import ITarefa from '../interfaces/ITarefa'
  
  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      Tarefa,
      Box
    },
    data () {
      return {
        tarefas: [] as ITarefa[]
      }
    },
    computed: {
      listaEstaVazia () : boolean {
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa) {
        this.tarefas.push(tarefa)
      }
    }
  });
  </script>
  