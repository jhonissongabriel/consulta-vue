<template>
  <div class="agenda-box-completo">
    <div class="col-6" v-for="agenda in agendas" :key="agenda.id">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">
            <strong>Consulta com {{ agenda.especialidade }}</strong>
          </h5>
          <p class="card-text">
            <strong>Data:</strong>
            {{agenda.data}}
          </p>
          <p class="card-text">
            <strong>Horário:</strong>
            {{agenda.horario}}
          </p>
          <p class="card-text">
            <strong>Especialidade:</strong>
            {{agenda.especialidade}}
          </p>
          <!--<p class="card-text">
        <strong>Médico(a):</strong>{{medico.nome}}
          </p>-->
          <p class="card-text">
            <strong>Consultório:</strong>
            {{agenda.consultorio.nome}}
          </p>
          <p class="card-text">
            <strong>Local:</strong>
            <br />
            Endereço: {{consultorio.endereco.rua}}
            <br />
            Número: {{consultorio.endereco.numero}}
            <br />
            Edificio: {{consultorio.endereco.edificio}}
            <br />
            Andar: {{consultorio.endereco.andar}}
            <br />
            Sala: {{consultorio.endereco.sala}}
            <br />
            Bairro: {{consultorio.endereco.bairro}}
            <br />
            CEP: {{consultorio.endereco.cep}}
            <br />
            Cidade: {{consultorio.endereco.cidade}}
          </p>
          <p class="card-text">
            <strong>Contato:</strong>
            <br />
            Telefone: {{consultorio.contato.telefone1}}
            <br />
            Telefone: {{consultorio.contato.teltefone2}}
            <br />
            E-mail: {{consultorio.contato.email}}
            <!--<br />
            Site: {{consultorio.contato.site}}-->
          </p>
          <button class="btn btn-sm btn-outline-warning">
            <router-link to="/remarcar">Remarcar</router-link>
          </button>
          <button class="btn btn-sm btn-outline-warning">
            <router-link to="/cancelar">Cancelar</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "AgendaBox",
  data() {
    return {
      agendas: [],
      consultorio: []
    };
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    atualizar() {
      axios
        .get("/agenda/getAll", { headers: { Accept: "application/json" } })
        .then(res => {
          alert(res);
          this.agendas = res.data;
        })
        .catch(error => alert(error));

        axios
        .get("/consultorio/getAll", { headers: { Accept: "application/json" } })
        .then(res => {
          alert(res);
          this.consultorio = res.data;
        })
        .catch(error => alert(error));
    }
  },
  created() {
    this.atualizar();
  }
};
</script>


<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: 0.4s;
  color: var(--dark);
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
  }
}
</style>