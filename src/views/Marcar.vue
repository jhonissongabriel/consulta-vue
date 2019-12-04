<template>
  <div class="marcar">
    <Menu />
    <div id="content">
      <h2>Marcar Consulta</h2>
      
      <div class="row">
        <div class="col-1"></div>
          <div class="col-6">
              <label>Selecione uma Especialidade</label>
              <select class="form-control" name="especialista_select" id="especialista_select">
                <option value="Acupuntura">Acupuntura</option>
                <option value="Alergia e Imunologia">Alergia e Imunologia</option>
                <option value="Anestesiologia">Anestesiologia</option>
                <option value="Angiologia">Angiologia</option>
                <option value="Cancerologia">Cancerologia</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Cirurgia Cardiovascular">Cirurgia Cardiovascular</option>
                <option value="Cirurgia da Mão">Cirurgia da Mão</option>
                <option value="Cirurgia de Cabeça e Pescoço">Cirurgia de Cabeça e Pescoço</option>
                <option value="Cirurgia do Aparelho Digestivo">Cirurgia do Aparelho Digestivo</option>
                <option value="Cirurgia Geral">Cirurgia Geral</option>
                <option value="Cirurgia Pediátrica">Cirurgia Pediátrica</option>
                <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                <option value="Cirurgia Torácica">Cirurgia Torácica</option>
                <option value="Cirurgia Vascular">Cirurgia Vascular</option>
                <option value="Clínica Médica">Clínica Médica</option>
                <option value="Coloproctologia">Coloproctologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Endocrinologia e Metabologia">Endocrinologia e Metabologia</option>
                <option value="Endoscopia">Endoscopia</option>
                <option value="Gastroenterologia">Gastroenterologia</option>
                <option value="Genética Médica">Genética Médica</option>
                <option value="Geriatria">Geriatria</option>
                <option value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</option>
                <option value="Hematologia e Hemoterapia">Hematologia e Hemoterapia</option>
                <option value="Homeopatia">Homeopatia</option>
                <option value="Infectologia">Infectologia</option>
                <option value="Mastologia">Mastologia</option>
                <option value="Medicina de Família e Comunidade">Medicina de Família e Comunidade</option>
                <option value="Medicina de Emergência">Medicina de Emergência</option>
                <option value="Medicina do Trabalho">Medicina do Trabalho</option>
                <option value="Medicina Esportiva">Medicina Esportiva</option>
                <option value="Medicina Física e Reabilitação">Medicina Física e Reabilitação</option>
                <option value="Medicina Intensiva">Medicina Intensiva</option>
                <option value="Medicina Legal e Perícia Médica">Medicina Legal e Perícia Médica</option>
                <option value="Medicina Nuclear">Medicina Nuclear</option>
                <option value="Medicina Preventiva e Social">Medicina Preventiva e Social</option>
                <option value="Nefrologia">Nefrologia</option>
                <option value="Neurocirurgia">Neurocirurgia</option>
                <option value="Neurologia">Neurologia</option>
                <option value="Nutrologia">Nutrologia</option>
                <option value="Obstetrícia">Obstetrícia</option>
                <option value="Oftalmologia">Oftalmologia</option>
                <option value="Ortopedia e Traumatologia">Ortopedia e Traumatologia</option>
                <option value="Otorrinolaringologia">Otorrinolaringologia</option>
                <option value="Patologia">Patologia</option>
                <option value="Patologia Clínica/Medicina Laboratorial">Patologia Clínica/Medicina
                            Laboratorial</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Pneumologia">Pneumologia</option>
                <option value="Psiquiatria">Psiquiatria</option>
                <option value="Radiologia e Diagnóstico por Imagem">Radiologia e Diagnóstico por Imagem
                        </option>
                <option value="Radioterapia">Radioterapia</option>
                <option value="Reumatologia">Reumatologia</option>
                <option value="Urologia">Urologia</option>
              </select>

            </div>
            <div class="row">
              <br><button class="form-control" type="submit">Buscar</button>
            </div>
            <div class="col-3"></div>
          </div>
        </div>
      </div>

</template>

<script>
import axios from 'axios'
import Menu from '../components/Menu'

export default {
  name: 'marcar',
  components: {
    'Menu': Menu
  },
  methods:{
    buscar () {
      axios.get('/especialidade/getNome/', 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          alert(res)
          this.anotacoes = res.data
        })
        .catch(error => alert(error))
    }
  }
};
</script>

<style>
</style>