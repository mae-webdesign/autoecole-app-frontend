import { instance } from "../service/axios.js"

export default {
    state: {
        listInstructors: null,
    },
    mutations: {
        updateListInstructor: async (state) => {
            state.listInstructors = (await instance.get("/instructors/")).data;
        },
        addInstructor: async (state, {payload}) => {
            await instance.post("/instructors/", payload)
        },
        deleteInstructor: async (state, {payload}) => {
            await instance.delete("/instructors/" + payload.id)
        }
    },
    actions: {
        async getListInstructors({ commit }) {
            await commit("updateListInstructor")
        },
        async addInstructor({ commit }, payload) {
            await commit("updateListInstructor", payload)
        }, 
    },
    getters: {
        instructorCount: (state) => {
            return state.listInstructors.length;
        }
    }
}