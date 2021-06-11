
import {createStore} from "vuex";
import {modules} from "./modules";
// console.log(modules);
// export default new Vuex.Store({ modules });

const store = createStore({
    state: {
        backendUrl: "http://127.0.0.1:8000/api/v1"
    },
    mutations: {},
    actions: {},
    modules,
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})

export default store