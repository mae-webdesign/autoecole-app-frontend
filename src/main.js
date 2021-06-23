import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import {default as store} from "./store/index.js"
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import AddInstructor from "@/views/admin/AddInstructorForm.vue";
import AddStudent from "@/views/admin/AddStudentForm.vue";
import AddSession from "@/views/admin/AddSessions.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";

import InstructorTable from "@/views/admin-autoecole/instructors-table.vue"
import StudentTable from "@/views/admin-autoecole/students-table.vue"
import SessionViews from "@/views/admin/ListSessions.vue"

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/instructors",
        component: InstructorTable,
      },
      {
        path: "/admin/add-instructor",
        component: AddInstructor,
      },
      {
        path: "/admin/students",
        component: StudentTable,
      },
      {
        path: "/admin/add-students",
        component: AddStudent,
      },
      {
        path: "/admin/sessions",
        component: SessionViews,
      },
      {
        path: "/admin/add-sessions",
        component: AddSession,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.component("AutoComplete", AutoComplete)
app.mount("#app")