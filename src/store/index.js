import Vue from "vue";
import Vuex from "vuex";
const fb = require('../firebase/firebaseInit')
Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
    if (user) {
        //console.log(user)
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
            //console.log(doc.data())
        })
    }
})

export const store = new Vuex.Store({
    state:{
        currentUser: null,
        userProfile: {},
    },

    actions: {
        clearData({ commit }) {
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
        },
        async fetchUserProfile({ commit, state }) {
            await fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                console.log("fetchUserProfile" + res.data())
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err)
            })
        },
    },

    mutations: {
         setCurrentUser(state, val) {
             state.currentUser = val
            // console.log( state.currentUser)
        },
        setUserProfile(state, val) {
            state.userProfile = val
            // console.log(state.userProfile)
        },
    }
});