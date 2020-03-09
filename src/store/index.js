import Vue from "vue";
import Vuex from "vuex";
const fb = require('../firebase/firebaseInit')
Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })

        fb.bookingCollection.where('userId', '==', user.uid).onSnapshot(querySnapshot => {
            let booksArray = []
      
            querySnapshot.forEach(doc => {
              let book = doc.data()
              book.id = doc.id
              booksArray.push(book)
            })
      
            store.commit('loadBook', booksArray)
        })

        fb.hostelCollection.where('userId', '==', user.uid).onSnapshot(querySnapshot => {
            let hostelArray = []
      
            querySnapshot.forEach(doc => {
              let hostel = doc.data()
              hostel.id = doc.id
              hostelArray.push(hostel)
            })
      
            store.commit('loadhostel', hostelArray)
        })
    }
})

export const store = new Vuex.Store({
    state:{
        bookList: [],
        book: {},
        hostelList: [],
        hostel: {},
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
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err)
            })
        },
    },

    mutations: {
        setCurrentUser(state, val) {
             state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        loadBook (state, notes) {
            state.bookList = notes
        },
        loadhostel (state, notes) {
            state.hostelList = notes
        }
    }
});