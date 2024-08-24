import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import A1 from './../Layouts/A1+/Main.vue'
import A2 from './../Layouts/A2/Main.vue'

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
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+",
      name: "A1+",
      component: () => import("../views/A1+/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit",
      name: "A1+ Starter Unit",
      component: () => import("../views/A1+/StarterUnit/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/classroom",
      name: "A1+ Starter Unit Classroom",
      component: () => import("../views/A1+/StarterUnit/Classroom/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/colors",
      name: "A1+ Starter Unit Colors",
      component: () => import("../views/A1+/StarterUnit/Colours/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/numbers_cardinal",
      name: "A1+ Starter Unit Numbers Cordional",
      component: () =>
        import("../views/A1+/StarterUnit/NumbrsCordional/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/numbers_ordinal",
      name: "A1+ Starter Unit Numbers Ordinal",
      component: () =>
        import("../views/A1+/StarterUnit/NumbersOrdinal/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/days",
      name: "A1+ Starter Unit Days",
      component: () => import("../views/A1+/StarterUnit/Days/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/months",
      name: "A1+ Starter Unit Months",
      component: () => import("../views/A1+/StarterUnit/Months/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/classroom_expressions_and_instructions",
      name: "A1+ Starter Unit Classroom Expressions and Instructions",
      component: () =>
        import(
          "../views/A1+/StarterUnit/Classroom_Expressions_and_Instructions/Main.vue"
        ),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/grammar_words",
      name: "A1+ Starter Unit Grammar Words",
      component: () =>
        import("../views/A1+/StarterUnit/Grammar_words/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/starter_unit_all_words",
      name: "A1+ Starter Unit All Words",
      component: () =>
        import("../views/A1+/StarterUnit/StartUnitAll_Words/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1",
      name: "A1+ Unit 1",
      component: () => import("../views/A1+/Unit1/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1/countries",
      name: "A1+ Unit 1 Countries",
      component: () => import("../views/A1+/Unit1/Countries/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1/nationalities",
      name: "A1+ Unit 1 Nationalities",
      component: () => import("../views/A1+/Unit1/Nationalities/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1/thefamily",
      name: "A1+ Unit 1 The Family",
      component: () => import("../views/A1+/Unit1/TheFamily/Main.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/classroom/test",
      name: "A1+ Starter Unit Classroom Test",
      component: () => import("../views/A1+/StarterUnit/Classroom/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/colors/test",
      name: "A1+ Starter Unit Colors Test",
      component: () => import("../views/A1+/StarterUnit/Colours/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/numbers_cardinal/test",
      name: "A1+ Starter Unit Numbrs Cordional Test",
      component: () =>
        import("../views/A1+/StarterUnit/NumbrsCordional/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/numbers_ordinal/test",
      name: "A1+ Starter Unit Numbrs Ordinal Test",
      component: () =>
        import("../views/A1+/StarterUnit/NumbersOrdinal/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/days/test",
      name: "A1+ Starter Unit days Test",
      component: () => import("../views/A1+/StarterUnit/Days/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/months/test",
      name: "A1+ Starter Unit Days Test",
      component: () => import("../views/A1+/StarterUnit/Months/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/classroom_expressions_and_instructions/test",
      name: "A1+ Starter Unit Classroom Expressions and Instructions Test",
      component: () =>
        import(
          "../views/A1+/StarterUnit/Classroom_Expressions_and_Instructions/test.vue"
        ),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/grammar_words/test",
      name: "A1+ Starter Unit Grammar Words Test",
      component: () =>
        import("../views/A1+/StarterUnit/Grammar_words/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/starter_unit/starter_unit_all_words/test",
      name: "A1+ Starter Unit All Words Test",
      component: () =>
        import("../views/A1+/StarterUnit/StartUnitAll_Words/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1/countries/test",
      name: "A1+ Unit 1 Countries Test",
      component: () => import("../views/A1+/Unit1/Countries/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a1+/unit1/nationalities/test",
      name: "A1+ Unit 1 Nationalities Test",
      component: () => import("../views/A1+/Unit1/Nationalities/test.vue"),
      meta: {
        layout: A1,
      },
    },
    {
      path: "/a2",
      name: "A2",
      component: () => import("../views/A2/Main.vue"),
      meta: {
        layout: A2,
      },
    },
    {
      path: "/a2/mainwords",
      name: "A2 Main words",
      component: () => import("../views/A2/MainWords/Main.vue"),
      meta: {
        layout: A2,
      },
    },
    {
      path: "/a2/mainwords/test",
      name: "A2 Main words test",
      component: () => import("../views/A2/MainWords/test.vue"),
      meta: {
        layout: A2,
      },
    },
  ],
});

export default router
