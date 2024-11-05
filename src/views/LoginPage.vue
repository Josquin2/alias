<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { Api } from '../api/ApiClass'
import router from '@/router'

async function onLoginClick() {
  const response = await api.post('login', {
    username: username.value,
    password: password.value,
  })

  if (response && response.status == 200) {
    localStorage.setItem('user', JSON.stringify(response.data))

    router.push('main-page')
  } else if (response && response.status == 204) {
    setError('Неверное имя пользователя или пароль')
  } else {
    setError('Произошла неожиданная ошибка')
  }
}

function setError(message: string) {
  error.value = message

  setTimeout(() => {
    error.value = ''
  }, 1500)
}

function onChangeClick() {
  router.push({ name: 'sign-up-page' })
}

const api = new Api()

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')

const error: Ref<string> = ref('')
</script>

<template>
  <div class="login-block">
    <h2 class="auth__title">Войдите в аккаунт!</h2>

    <div class="auth-input-block">
      <input type="text" v-model="username" placeholder="Имя пользователя" />
      <input type="password" v-model="password" placeholder="Пароль" />
    </div>

    <div class="enter-block">
      <p class="enter__error">{{ error }}</p>

      <button class="enter__button" @click="onLoginClick()">Войти</button>

      <a class="enter__change" @click="onChangeClick()">Нет аккаунта?</a>
    </div>
  </div>
</template>

<style>
.login-block {
  padding: 2rem 3rem;
  max-width: 33.5rem;
  width: 100%;
  background-color: #3c3c3c;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
}

.login-block * {
  background-color: #3c3c3c;
}

.auth__title {
  text-align: center;
}

.auth-input-block {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.auth-input-block input {
  height: 2.5rem;
  width: 100%;
  padding-left: 1rem;
  border: 1px solid #909090;
  border-radius: 0.5rem;
}

.enter-block {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.enter-block .enter__error {
  height: 1.3rem;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.enter-block .enter__button {
  padding: 0.5rem 7rem;
  border: 1px solid #909090;
  border-radius: 0.5rem;
  font-size: 1.2rem;
}

.enter-block .enter__change {
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.enter-block .enter__change:hover {
  text-decoration: underline;
}
</style>
