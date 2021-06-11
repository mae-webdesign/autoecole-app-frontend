import { instance } from "../service/axios.js"

export default {
    state: {
        listStudents: null,
    },
    mutations: {
        updateListStudents: async (state) => {
            state.listStudents = (await instance.get("/students/")).data;
        },
        addStudent: async (state, {payload}) => {
            await instance.post("/students/", payload)
        }
    },
    actions: {
        getListStuduent({ commit }) {
            commit("updateListStudents")
        }
    },
    getters: {
        studentCount: (state) => {
            return state.listStudents.length;
        }
    }
}