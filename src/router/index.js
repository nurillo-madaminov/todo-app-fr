import { createRouter, createWebHistory } from 'vue-router'
import ListView from "../views/ListView.vue"

const routes = [
  {
    path: "/",
    redirect: {name: "ListView", params: {id:1}}
  },
 {
    path: "/lists/:id",
    name: "ListView",
    component: ListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
