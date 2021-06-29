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
      rounded-lg
      bg-blueGray-100
      border-0
    "
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Ajouter une session</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Session
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Moniteur
              </label>
              <Dropdown
                v-model="selectedInstructor"
                :options="this.listInstructor"
                optionLabel="complete_name"
                placeholder="Sélectionner un moniteur"
                :filter="true"
                filterPlaceholder="Taper pour filtrer"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ÉLève
              </label>
              <Dropdown
                v-model="selectedStudent"
                :options="this.listStudent"
                optionLabel="complete_name"
                placeholder="Sélectionner un élève"
                :filter="true"
                filterPlaceholder="Taper pour filtrer"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Date
              </label>
              <input
                type="date"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none
                  focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                v-model="date"
                @blur="onBlurDate"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Heure
              </label>
              <Dropdown
                v-model="selectedHour"
                :options="this.listHour"
                placeholder="Sélectionner une heure"
              />
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Lieu de rendez-vous
              </label>
              <input
                type="text"
                class="
                  border-0
                  px-3
                  py-3
                  placeholder-blueGray-300
                  text-blueGray-600
                  bg-white
                  rounded
                  text-sm
                  shadow
                  focus:outline-none
                  focus:ring
                  w-full
                  ease-linear
                  transition-all
                  duration-150
                "
                placeholder="Route Nationale 2"
                v-model="location"
              />
            </div>
          </div>
        </div>
      </form>
      <button
        class="
          bg-emerald-500
          text-white
          active:bg-emerald-600
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          mr-1
          ease-linear
          transition-all
          duration-150
        "
        @click="onClickSubmit"
      >
        Ajouter session
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Dropdown from "primevue/dropdown";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedInstructor: {},
      selectedStudent: {},
      selectedHour: this.listHour,
      filteredInstructorsBasic: [],
      filteredStudentsBasic: [],
      location: "",
      date: this.nextDay(),
    };
  },
  computed: {
    ...mapState({
      listInstructor: (state) => state.store_instructor.listInstructors,
      listStudent: (state) => state.store_student.listStudents,
      listHour: (state) => state.store_schedule.list_hour.hour,
    }),
  },
  methods: {
    onClickSubmit() {},
    onBlurDate() {
      const payload = {
        date: this.date,
        instructor_id: this.selectedInstructor.id
      }
      this.$store.dispatch("store_schedule/getListHour", payload);
    },
    getHour: () => {
      const payload = {
        date: this.date,
        instructor_id: this.selectedInstructor.id
      }
      this.$store.dispatch("store_schedule/getListHour", payload);
    },
    nextDay: () => {
        var result = new Date();
        result.setDate(result.getDate() + 2);
        return result.toISOString().slice(0, 10);
      }
  },
};
</script>
