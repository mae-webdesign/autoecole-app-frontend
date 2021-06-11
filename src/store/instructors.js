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
        }
    },
    actions: {
        getListInstructors({ commit }) {
            commit("updateListInstructor")
        }
    },
    getters: {
        instructorCount: (state) => {
            return state.listInstructors.length;
        }
    }
}