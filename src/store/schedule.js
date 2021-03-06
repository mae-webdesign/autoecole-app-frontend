import { instance } from "../service/axios.js"

export default {
    namespaced: true,
    state: {
        list_hour: [],
    },
    mutations: {
        SET_LIST_HOUR: (state, listHour) => {
            state.list_hour = listHour;
        },
    },
    actions: {
        async getListHour({ commit }, payload) {
            try {
                console.log(payload)
                const newAvailableSchedule = await instance.get("/schedules/" + payload.instructor_id + "/" + payload.date + "/")
                commit("SET_LIST_HOUR", newAvailableSchedule.data);
            } catch (error) {
                console.log(error)
            }
        },
    },
    getters: {

    }
}