<template>
  <form @submit.prevent="login">
    <div class="login-page">
      <div class="card">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="username">Usuário</label>
      <input type="text" id="username" class="form-control" required autofocus v-model="nome">
          </div>
          <div class="form-group">
            <label for="inputPassword">Senha</label>
      <input type="password" id="inputPassword" class="form-control" required v-model="senha">
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Ok</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      nome: '',
      senha: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken'
    ]),
    login() {
      axios.post('login',
          {
            username: this.nome,
            password: this.senha
          })
        .then(res => {
          alert(res)
          this.setUsuario(res.data)
          this.setToken(res.headers.token)
          this.$router.push('/')
        })
        .catch(error => alert(error))
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 30%;
  }
}
</style>