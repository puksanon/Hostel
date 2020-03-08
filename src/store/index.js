import Vue from "vue";
import Vuex from "vuex";
const { database } = require('../firebase/firebaseInit')
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        currentUser: null,
        userProfile: []
    },

    actions: {
        clearData({ commit }) {
            commit('setCurrentUser', null)
            commit('setUserProfile', [])
        },
        fetchUserProfile({ commit, state }) {
            database.ref('users/' + state.currentUser.uid).once('value').then(res => {
                commit('setUserProfile', res.val())
            }).catch(err => {
                console.log(err)
            })
        }
    },

    mutations: {
         setCurrentUser(state, val) {
             state.currentUser = val
        },
         setUserProfile(state, val) {
             state.userProfile = val
            // console.log(state.userProfile , val)
        }
    }
});