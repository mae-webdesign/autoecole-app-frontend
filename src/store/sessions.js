import { instance } from "../service/axios.js"

export default {
    state: {
        listStudents: null,
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
        getListSession({ commit }) {
            commit("updateListSessions")
        }
    },
    getters: {
        studentCount: (state) => {
            return state.listStudents.length;
        }
    }
}