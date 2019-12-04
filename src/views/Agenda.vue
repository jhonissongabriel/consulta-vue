<template>
  <div class="agenda">
    <Menu />
    <div id="content">
      <h2>Agenda</h2>
      <AgendaBox />
      <button @click="expandir">Expandir</button>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import AgendaBox from "../components/AgendaBox";

export default {
  name: "agenda",
  components: {
    Menu: Menu,
    AgendaBox: AgendaBox
  },
  methods: {
  },
  created() {
    this.atualizar();
  }
};
</script>

<style>
</style>