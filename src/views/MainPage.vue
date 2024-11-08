<script setup lang="ts">
import { type Ref, ref } from 'vue'

const avatar: Ref<string> = ref('')
const username = 'Josquin'
</script>

<template>
  <div class="main-page-block">
    <div class="profile-start-block">
      <section class="profile-block mp-bg mp-block-mw">
        <header class="profile-header">
          <div class="profile-avatar">
            <img :src="avatar" alt="" />
          </div>

          <div class="profile-settings">
            <button>Settings</button>
          </div>
        </header>

        <footer class="profile-footer">
          <div class="profile-info">
            <input type="text" class="username" v-model="username" />

            <input type="text" class="status" placeholder="Добавьте ваш девиз!" />
          </div>

          <div class="profile-logout">
            <button>logout</button>
          </div>
        </footer>
      </section>

      <section class="start-game-block mp-bg mp-block-mw mp-btn">
        <button class="create__game">Создать игру</button>
        <button class="connect__game">Присоединиться</button>
      </section>

      <section class="add-cards-block mp-bg mp-block-mw mp-btn">
        <button>Добавить слова (скоро)</button>
      </section>
    </div>

    <div class="main-chat-block mp-bg mp-block-mw"></div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .profile-start-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .profile-block {
      overflow: hidden;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .profile-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .profile-avatar {
          width: 5rem;
          height: 5rem;
          border-radius: 0.5rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .profile-settings {
          align-self: flex-start;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            width: 3rem;
            height: 3rem;
            background-color: #707070;
            border-radius: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .profile-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input {
            border: none;
            background-color: transparent;
          }

          .username {
            height: 2rem;
            font-size: 1.2rem;
            width: 15rem;
          }

          .status {
            height: 1.5rem;
            font-size: 1rem;
            width: fit-content;
          }
        }
      }
    }
  }

  .mp-btn {
    height: 6rem;
  }

  .start-game-block {
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      font-size: 1rem;
      background: linear-gradient(to right, #314939, #473333);
      padding: 1rem 0rem;
      border-radius: 0.5rem;
    }

    .create__game {
      width: 60%;
    }

    .connect__game {
      width: 40%;
      background: linear-gradient(to left, #314939, #473333);
    }
  }

  .add-cards-block {
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      font-size: 1rem;
      background: linear-gradient(to left, #314939, #473333, #314939);
      opacity: 0.3;
      padding: 1rem 0rem;
      border-radius: 0.5rem;
    }
  }
}

.mp-block-mw {
  min-width: 32rem;
}

.mp-bg {
  background-color: #212121;
  border: none;
  border-radius: 0.5rem;

  * {
    background-color: #212121;
  }
}
</style>
