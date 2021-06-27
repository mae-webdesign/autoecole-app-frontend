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
    },
    actions: {
        async getListStudent({ commit }) {
            try { 
                const listStudent = await instance.get("/students/");
                listStudent.data.map(item => item.complete_name = item.firstname + " " + item.lastname )
                commit("updateListStudents", listStudent.data)
            } catch (error) {
                console.log(error)
            }
        },
        async addStudent (state, payload) {
            try {
                await instance.post("/students/", payload)
            } catch (error) {
                console.log(error)
            }
        }
    },
}