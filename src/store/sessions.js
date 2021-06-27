import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        listStudents: [],
    },
    mutations: {
        updateListSessions: (state, newListStudent) => {
            state.listStudents = newListStudent;
        },
    },
    actions: {
        async getListSession({ commit }) {
            try {
                const newListStudent = await instance.get("/sessions/");
                await commit("updateListSessions", newListStudent.data);
            } catch (error) {
                console.log(error)
            }
        },
        addSession: async (state, {payload}) => {
            try {
                await instance.post("/sessions/", payload)
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
 
    }
}