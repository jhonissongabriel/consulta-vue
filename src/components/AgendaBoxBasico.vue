<template>
  <div class="agenda-box-completo">
    <div class="row">
      <div class="col-sm-6" v-for="agenda in agendas" :key="agenda.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Consulta com {{agenda.especialista}}</h5>
            <p class="card-text">
              <strong>Data:</strong>
              {{agenda.data}}
            </p>
            <p class="card-text">
              <strong>Horário:</strong>
              {{agenda.horario}}
            </p>
            <p class="card-text">{{agenda.consultorio.nome}}</p>
            <router-link to="/agenda-completo">Mais informações</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'agendas',
  data(){
    return{
      agendas:[]
    }
  },
  methods:{
    atualizar(){
      axios.get('/agenda/getAll',
      {headers: {Accept: 'application/json'}}      )
      .then(res => {
        console.log(res)
        this.agendas = res.data
      })
      .catch(error => conole.log(error))
    }
  },
  created(){
    this.atualizar()
  }
}
</script>

<style>
</style>