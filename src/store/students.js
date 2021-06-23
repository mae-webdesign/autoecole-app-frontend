import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        listStudents: null,
    },
    mutations: {
        updateListStudents: async (state) => {
            state.listStudents = (await instance.get("/students/")).data;
        },
        addStudent: async (state, { payload }) => {
            await instance.post("/students/", payload)
        }
    },
    actions: {
        async getListStudent({ commit }) {
            await commit("updateListStudents")
        },
        async addStudent (state, { payload }) {
            await instance.post("/students/", payload)
        }
    },
}