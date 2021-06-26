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
        addInstructor: async (state, { payload }) => {
            try {
                await instance.post("/instructors/", payload)
            } catch (error) {
                console.log(error)
            }
        },
        deleteInstructor: async (state, { payload }) => {
            try {
                await instance.delete("/instructors/" + payload.id)
            } catch (error) {
                console.log(error)
            }
        }
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
        async addInstructor({ commit }, payload) {
            try {
                await commit("updateListInstructor", payload)
            } catch (error) {
                console.log(error)
            }
        },
    },
    getters: {
        getterListInstructor(state) {
            return state.listInstructors
        }

    }
}