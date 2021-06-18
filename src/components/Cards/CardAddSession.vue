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
              <select v-model="selected" class="w-full">
                <option>Choisissez</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
              </select>
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
              <select v-model="selected" class="w-full">
                <option>Choisissez</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
              </select>
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
              <select v-model="selected" class="w-full">
                <option>Choisissez</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
              </select>
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
// import FileDrop from "@/components/Misc/FileDrop.vue";
export default {
  components: {
    // FileDrop,
  },
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
    };
  },
  methods: {
    onClickSubmit() {
      const payload = {
        lastname: this.lastname,
        firstname: this.firstname,
        birthday: this.birthday,
        username: this.username,
        street: this.street,
        city: this.city,
        country: this.country,
        postalcode: this.postalcode,
        phone: this.phone,
        bio: this.bio,
      };
      console.log(payload);
      // this.$store.commit("addStudent", { payload });
      // this.$store.coommit("updateListStudents");
    },
  },
};
</script>
