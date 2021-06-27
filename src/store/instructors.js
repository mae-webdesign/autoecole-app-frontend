import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        listInstructors: [],
    },
    mutations: {
        updateListInstructor: (state, newListInstructor) => {
                state.listInstructors = newListInstructor
        },
    },
    actions: {
        async getListInstructors({ commit }) {
            try {
                const newListInstructor = await instance.get("/instructors/");
                newListInstructor.data.map(item => item.complete_name = item.firstname + " " + item.lastname )
                await commit("updateListInstructor", newListInstructor.data)
            } catch (error) {
                console.log(error)
            }
        },
        async addInstructor(state, payload) {
            try {
                await instance.post("/instructors/", payload);
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {
    }
}