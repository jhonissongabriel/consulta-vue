<template>
  <div class="cancelar">
    <Menu/>
    <div id="content">
      <h2>Cancelar Consulta</h2>
      <div class="row">
        <div class="col-sm-6">
         
        </div>
        <div class="col-sm-6">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'cancelar',
  components: {
    'Menu': Menu
  },
  props: {
    especialista:{
      type: String,
      default: 'Oftalmologista'
    },
    data:{
      type: String,
      default: '31 / 12 / 2019'
    },
    resumo:{
      type: String,
      defaut: 'A sua consulta está marcada para o dia'
    }
    
  }
};
</script>

<style>
</style>