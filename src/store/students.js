import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        listStudents: [],
    },
    mutations: {
        updateListStudents: (state, newListStudent) => {
            state.listStudents = newListStudent;
        },
        addStudent: async (state, { payload }) => {
            try {
                await instance.post("/students/", payload)
            } catch (error) {
                console.log(error)
            }
        }
    },
    actions: {
        async getListStudent({ commit }) {
            try { 
                (await instance.get("/students/")).data;
                await commit("updateListStudents")
            } catch (error) {
                console.log(error)
            }
        },
        async addStudent (state, { payload }) {
            try {
                await instance.post("/students/", payload)
            } catch (error) {
                console.log(error)
            }
        }
    },
}