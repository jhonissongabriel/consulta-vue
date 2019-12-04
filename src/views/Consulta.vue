<template>
  <div class="consulta">
    <Menu />
    <div id="content">
      <h2>Consulta</h2>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <strong>Consulta com {{ especialidade.nome }} </strong>
              </h5>
              <p class="card-text">
                <strong>Data:</strong>{{agenda.data}}
              </p>
              <p class="card-text">
                <strong>Horário:</strong> {{agenda.horario}}
              </p>
              <p class="card-text">
                <strong>Médico(a):</strong> {{medico.nome}}
              </p>
              <p class="card-text">
                <strong>Especialidade do(a) Médico(a):</strong>{{medico.especialidade}}
              </p>
              
              <p class="card-text">
                <strong>Consultório:</strong>{{consultorio.nome}}
              </p>
              <p class="card-text">
                <strong>Local:</strong>
                <br />Endereço: {{endereco.rua}}
                <br />Número: {{endereco.numero}}
                <br />Bairro: {{endereco.bairro}}
                <br />CEP: {{endereco.cep}}
                <br />Cidade: {{endereco.cidade}}
              </p>
              <p class="card-text">
                <strong>Contato:</strong>
                <br />Telefone: (12) 3442-8230
                <br />Telefone: (12) 98880-0808
                <br />E-mail: contato@clinicavida.com.br
                <br />Site: https://www.clinicavida.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'consulta',
  components: {
    'Menu': Menu
  },
  props: {
    especialista: {
      type: String,
      default: "Oftalmologista"
    },
    data: {
      type: String,
      default: "31 / 12 / 2019"
    },
    resumo: {
      type: String,
      defaut: "A sua consulta está marcada para o dia"
    }
  }
};
</script>

<style>
</style>