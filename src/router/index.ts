import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default-layout',
      component: DefaultLayout,
      children: [
        {
          path: '/log-in',
          name: 'log-in-page',
          component: LoginPage,
        },
        {
          path: '/sign-up',
          name: 'sign-up-page',
          component: SignupPage,
        },
      ],
    },
  ],
})

// router.beforeEach(async (to) => {
//   if (to.name !== 'home') {
//     try {
//       const auth = await UserClass.checkAuth()
//       if (auth === false) {
//         return '/'
//       }
//     } catch (error) {
//       return '/'
//     }
//   }
// })

export default router
