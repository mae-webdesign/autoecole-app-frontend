<template>
  <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      w-full
      mb-6
      shadow-lg
      rounded
    "
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Élèves
          </h3>
        </div>
        <router-link
          to="/admin/add-students"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            @click="navigate"
            class="text-xs uppercase py-3 font-bold block"
            :class="[
              isActive
                ? 'text-emerald-500 hover:text-emerald-600'
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
            <div class="relative w-auto pl-4 flex-initial">
              <div
                class="
                  text-white
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  shadow-lg
                  rounded-full
                  bg-emerald-500
                "
              >
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </a>
        </router-link>
        <div class="relative w-auto pl-4 flex-initial">
          <button class="focus:outline-none"
            @click="this.$store.dispatch('store_student/getListStudent')"
          >
            <div
              class="
                text-white
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-12
                h-12
                shadow-lg
                rounded-full
                bg-emerald-500
              "
            >
              <i class="fas fa-redo"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Nom
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Téléphone
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Email
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Nombre d'étudiants
            </th>
            <!-- <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Completion
            </th> -->
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(elem, id) in listStudent" :key="id">
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="ml-3 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                {{ elem.firstname }} {{ elem.lastname }}
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              {{ elem.phone }}
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <i class="fa fa-messages text-orange-500 mr-2"></i>
              {{ elem.email }}
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <div>1</div>
              </div>
            </td>
            <!-- <td -->
            <!-- class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              " -->
            <!-- > -->
            <!-- <div class="flex items-center">
                <span class="mr-2">60%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                  >
                    <div
                      style="width: 60%"
                      class="
                        shadow-none
                        flex flex-col
                        text-center
                        whitespace-nowrap
                        text-white
                        justify-center
                        bg-red-500
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </td> -->
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-right
              "
            >
              <table-dropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      listStudent: (state) => state.store_student.listStudents,
    }),
  },
  components: {
    TableDropdown,
  },
  methods: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  mounted() {},
};
</script>
