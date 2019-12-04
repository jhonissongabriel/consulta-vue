<template>
  <div class="menu-principal">
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar">
        <div id="sidebarCollapse" class="btn btn-info">
          <span>Recolhe</span>
        </div>
        <div id="nome-pessoa" class="sidebar-header">
          <h3>Olá</h3><br>
           <!--<h5>{{ pessoa.nome }}</h5>-->
          <!-- <h3 id="nome-pessoa">Olá {{pessoa.nome}}</h3> -->
        </div>

        <ul class="list-unstyled components">
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >Principal</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <router-link to="/agenda">Consultas Agendadas</router-link>
              </li>
              <li>
                <router-link to="/marcar">Marcar Consulta</router-link>
              </li>
              <li>
                <router-link to="/remarcar">Remarcar Consulta</router-link>
              </li>
              <li>
                <router-link to="/cancelar">Cancelar Consulta</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >Busca</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <router-link to="/especialista">Especialista</router-link>
              </li>
              <li>
                <router-link to="/clinica">Clínica</router-link>
              </li>
              <li>
                <router-link to="/medico">Médico</router-link>
              </li>
              <li>
                <router-link to="/regiao">Região</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/historico">Histórico</router-link>
          </li>
          <li>
            <router-link to="/configuracao">Configuração</router-link>
          </li>
          <li>
            <router-link to="/sair">Sair</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

//import axios from "axios";

export default {
  name: 'Menu',
  
};
</script>
