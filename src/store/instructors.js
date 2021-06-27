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
                await commit("updateListInstructor", newListInstructor.data)
            } catch (error) {
                console.log(error)
            }
        },
        // eslint-disable-next-line
        async addInstructor({commit}, payload) {
            try {
                await instance.post("/instructors/", payload);
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {
        getterListInstructor(state) {
            return state.listInstructors
        }
    }
}