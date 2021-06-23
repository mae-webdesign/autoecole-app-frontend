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
              <AutoComplete
                v-model="selectedInstructor"
                :suggestions="filteredInstructorsBasic"
                @complete="searchInstructor($event)"
                field="item.field"
                :dropdown="true"
              />
              <!-- <Dropdown
                v-model="selectedInstructor"
                :options="this.listInstructor"
                optionLabel="firstname"
                :filter="true"
              /> -->
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
              <AutoComplete
                v-model="selectedStudent"
                :suggestions="filteredStudentsBasic"
                @complete="searchStudent($event)"
                field="item.field"
              />
              <div
              >
                null
                <Dropdown />
              </div>
              <div>
                zero
                <Dropdown />
                <!-- <Dropdown v-model="selectedStudent" :options="listStudent" optionLabel="name" placeholder="Select a Student" /> -->
              </div>
              <div>
                <Dropdown />
                <!-- <Dropdown placeholder="Select a City" /> -->
              </div>
              <!-- TODO implement fuzzy search -->
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
                placeholder="abdou.hamada"
                v-model="username"
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
              <AutoComplete />
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
                v-model="street"
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
        Ajouter instructeur
      </button>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import Dropdown from "primevue/dropdown";
import { mapState } from "vuex";

export default {
  components: { Dropdown },
  data() {
    return {
      lastname: "",
      firstname: "",
      birthday: "1999-12-31",
      username: "",
      street: "",
      city: "",
      country: "France",
      postalcode: "976",
      phone: "06 39",
      bio: "",
      selectedInstructor: "",
      selectedStudent: "",
      filteredInstructorsBasic: [],
      filteredStudentsBasic: [],
    };
  },
  computed: {
    ...mapState({
      listInstructor: (state) => state.store_instructor.listInstructors,
      listStudent: (state) => state.store_student.listStudents,
    }),
  },
  methods: {
    onClickSubmit() {
      // const payload = {
      //   lastname: this.lastname,
      //   firstname: this.firstname,
      //   birthday: this.birthday,
      //   username: this.username,
      //   street: this.street,
      //   city: this.city,
      //   country: this.country,
      //   postalcode: this.postalcode,
      //   phone: this.phone,
      //   bio: this.bio,
      // };
      // this.$store.commit("addStudent", { payload });
      // this.$store.dispatch("store_instructor/getListInstructors");
    },
    searchInstructor(event) {
      const options = {
        keys: ["lastname", "firstname"],
      };
      const fuse = new Fuse(this.listInstructor, options);

      // Change the pattern
      const pattern = event.query;

      const result_search = fuse.search(pattern);

      result_search.forEach((elem) => {
        elem.item.field = elem.item.firstname + " " + elem.item.lastname;
      });
      this.filteredInstructorsBasic = [...result_search];
      return;
    },
    searchStudent(event) {
      const options = {
        keys: ["lastname", "firstname"],
      };
      const fuse = new Fuse(this.listStudent, options);

      // Change the pattern
      const pattern = event.query;

      const result_search = fuse.search(pattern);

      result_search.forEach((elem) => {
        elem.item.field = elem.item.firstname + " " + elem.item.lastname;
      });
      this.filteredStudentsBasic = [...result_search];
      return;
    },
  },
};
</script>
