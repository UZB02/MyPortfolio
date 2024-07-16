import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/a1+",
      name: "A1+",
      component: () => import("../views/A1+/Main.vue"),
    },
    {
      path: "/a1+/starter_unit",
      name: "A1+ Starter Unit",
      component: () => import("../views/A1+/StarterUnit/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/classroom",
      name: "A1+ Starter Unit Classroom",
      component: () => import("../views/A1+/StarterUnit/Classroom/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/colors",
      name: "A1+ Starter Unit Colors",
      component: () => import("../views/A1+/StarterUnit/Colours/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/numbers_cardinal",
      name: "A1+ Starter Unit Numbers Cordional",
      component: () =>
        import("../views/A1+/StarterUnit/NumbrsCordional/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/numbers_ordinal",
      name: "A1+ Starter Unit Numbers Ordinal",
      component: () =>
        import("../views/A1+/StarterUnit/NumbersOrdinal/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/days",
      name: "A1+ Starter Unit Days",
      component: () => import("../views/A1+/StarterUnit/Days/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/months",
      name: "A1+ Starter Unit Days",
      component: () => import("../views/A1+/StarterUnit/Months/Main.vue"),
    },
    {
      path: "/a1+/starter_unit/classroom_expressions_and_instructions",
      name: "A1+ Starter Unit Classroom Expressions and Instructions",
      component: () =>
        import(
          "../views/A1+/StarterUnit/Classroom_Expressions_and_Instructions/Main.vue"
        ),
    },
    {
      path: "/a1+/starter_unit/classroom/test",
      name: "A1+ Starter Unit Classroom Test",
      component: () => import("../views/A1+/StarterUnit/Classroom/test.vue"),
    },
    {
      path: "/a1+/starter_unit/colors/test",
      name: "A1+ Starter Unit Colors Test",
      component: () => import("../views/A1+/StarterUnit/Colours/test.vue"),
    },
    {
      path: "/a1+/starter_unit/numbers_cardinal/test",
      name: "A1+ Starter Unit Numbrs Cordional Test",
      component: () =>
        import("../views/A1+/StarterUnit/NumbrsCordional/test.vue"),
    },
    {
      path: "/a1+/starter_unit/numbers_ordinal/test",
      name: "A1+ Starter Unit Numbrs Ordinal Test",
      component: () =>
        import("../views/A1+/StarterUnit/NumbersOrdinal/test.vue"),
    },
    {
      path: "/a1+/starter_unit/days/test",
      name: "A1+ Starter Unit Days Test",
      component: () => import("../views/A1+/StarterUnit/Days/test.vue"),
    },
    {
      path: "/a1+/starter_unit/months/test",
      name: "A1+ Starter Unit Days Test",
      component: () => import("../views/A1+/StarterUnit/Months/test.vue"),
    },
    {
      path: "/a1+/starter_unit/classroom_expressions_and_instructions/test",
      name: "A1+ Starter Unit Classroom Expressions and Instructions Test",
      component: () => import("../views/A1+/StarterUnit/Classroom_Expressions_and_Instructions/test.vue"),
    },
  ],
});

export default router
