import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        listStudents: [],
    },
    mutations: {
        updateListSessions: async (state) => {
            state.listStudents = (await instance.get("/sessions/")).data;
        },
        addStudent: async (state, {payload}) => {
            await instance.post("/students/", payload)
        }
    },
    actions: {
        async getListSession({ commit }) {
            await commit("updateListSessions")
        }
    },
    getters: {
 
    }
}