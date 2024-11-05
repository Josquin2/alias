<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { Api } from '../api/ApiClass'
import router from '@/router'

async function onLoginClick() {
  api.post('signup', {
    username: username.value,
    password: password.value,
  })
}

function onChangeClick() {
  router.push({ name: 'log-in-page' })
}

const api = new Api()

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const confirmPassword: Ref<string> = ref('')
</script>

<template>
  <div class="login-block">
    <h2 class="auth__title">Войдите в аккаунт!</h2>

    <div class="auth-input-block">
      <input type="text" v-model="username" placeholder="Имя пользователя" />
      <input type="password" v-model="password" placeholder="Пароль" />
      <input type="password" v-model="confirmPassword" placeholder="Повторите пароль" />
    </div>

    <div class="enter-block">
      <p class="enter__error"></p>

      <button class="enter__button" @click="onLoginClick()">Зарегестрироваться</button>

      <a class="enter__change" @click="onChangeClick()">Есть аккаунт?</a>
    </div>
  </div>
</template>

<style scoped>
/* all other styles in LoginPage.vue */
.enter__button {
  padding: 0.5rem 4rem;
}
</style>
