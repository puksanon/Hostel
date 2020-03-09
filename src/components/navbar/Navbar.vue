<template>
    <div class="Navbar">
        <div class="navbar_signin" v-if="!currentUser">
            <v-card class="mx-auto overflow-hidden" >
                <v-app-bar
                color="transparent"
                fixed
                flat
                style="border-radius: 0;"
                height="100"
                dark
                >
                <v-toolbar-title>The Hostel</v-toolbar-title>

                <v-spacer></v-spacer>
                 <v-btn text class="mr-2 hidden-sm-and-down" to="/">HOME</v-btn>
                <v-btn text class="mr-2 hidden-sm-and-down" to="/login">SIGN IN</v-btn>
                <v-btn text class="mr-2 hidden-sm-and-down" to="/signup">SING UP</v-btn>
                </v-app-bar>
            </v-card>   
        </div>
        <div class="admin_nav" v-else-if="userProfile.permission === 'admin'">
            <v-card class="mx-auto overflow-hidden">
                <v-app-bar
                color="transparent"
                fixed
                flat
                dark
                style="border-radius: 0;"
                height="80"
                >
                    <v-toolbar-title>The Hostel</v-toolbar-title>

                    <v-spacer></v-spacer>
                    <v-btn text class="mr-2 hidden-sm-and-down" to="/">Home</v-btn>
                    <v-btn text class="mr-2 hidden-sm-and-down" to="/admin/dashboard">DASHBOARD</v-btn>
                    <v-btn text class="mr-2 hidden-sm-and-down" to="/admin/manageuser">Manage User</v-btn>
                    <v-btn text class="mr-2 hidden-sm-and-down" to="/admin/managehostel">Manage Hostel</v-btn>
                    <v-menu
                        open-on-hover
                        transition="slide-x-transition"
                        bottom
                        right
                        offset-y
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn depressed color='transparent' height="50" v-on="on"  class="hidden-sm-and-down">
                                <span style="margin-right: 10px;" color="black">{{ user.username }}</span>
                                <v-avatar
                                    size="40px"
                                >
                                    <img
                                    alt="Avatar"
                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                    >
                                </v-avatar>   
                            </v-btn>  
                        </template> 
                        <v-list shaped>
                            <v-list-item-group color="purple darken-3">
                                <v-list-item @click="Signout()">
                                    <v-list-item-action>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-title>Sign out</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>    
                        </v-list>
                    </v-menu>  

                    <v-app-bar-nav-icon  class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                            
                </v-app-bar>
            </v-card>   
          <v-navigation-drawer class="hidden-md-and-up" v-model="sidebar" app right>
                <template v-slot:prepend>
                    <v-list-item two-line>
                        <v-list-item-avatar size="50">
                            <img src="https://randomuser.me/api/portraits/women/81.jpg">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ user.username }}</v-list-item-title>
                            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <v-list shaped>
                    <v-subheader>SEARCH</v-subheader>
                    <v-text-field
                        class="mx-2 mb-2" 
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="search"
                        solo-inverted
                        color="purple darken-3"
                    ></v-text-field>

                    <v-subheader>MENU</v-subheader>
                    <v-list-item-group color="purple darken-3">
                        <v-list-item to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/admin/dashboard">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/admin/manageuser">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Manage User</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/admin/managehostel">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Manage Hostel</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                    <v-btn block dark color="purple darken-3" @click="Singout();">Logout</v-btn>
                    </div>
                </template>    
            </v-navigation-drawer>
        </div>
        <div class="user_nav" v-else-if="userProfile.permission === 'user' ">
            <v-card class="mx-auto overflow-hidden">
            <v-app-bar
              color="transparent"
              fixed
              flat
              dark
              style="border-radius: 0;"
              height="80"
            >
            <v-toolbar-title>The Hostel</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text class="mr-2 hidden-sm-and-down" to="/">Home</v-btn>
            <v-btn text class="mr-2 hidden-sm-and-down" to="/user/dashboard">DASHBOARD</v-btn>
            <v-btn text class="mr-2 hidden-sm-and-down" to="/user/mybook">my book</v-btn>
            <v-menu
                open-on-hover
                transition="slide-x-transition"
                bottom
                right
                offset-y
            >
                <template v-slot:activator="{ on }">
                    <v-btn depressed color='transparent' height="50" v-on="on"  class="hidden-sm-and-down">
                        <span style="margin-right: 10px;" color="black">{{ user.username }}</span>
                        <v-avatar
                            size="40px"
                        >
                            <img
                            alt="Avatar"
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            >
                        </v-avatar>   
                    </v-btn>  
                </template> 
                <v-list shaped>
                    <v-list-item-group color="purple darken-3">
                        <v-list-item @click="Signout()">
                            <v-list-item-action>
                                <v-icon>mdi-heart</v-icon>
                            </v-list-item-action>
                            <v-list-item-title>Sign out</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>    
                </v-list>
            </v-menu>  

             <v-app-bar-nav-icon  class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                    
            </v-app-bar>
          </v-card>   
          <v-navigation-drawer class="hidden-md-and-up" v-model="sidebar" app right>
                <template v-slot:prepend>
                    <v-list-item two-line>
                        <v-list-item-avatar size="50">
                            <img src="https://randomuser.me/api/portraits/women/81.jpg">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ user.username }}</v-list-item-title>
                            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <v-list shaped>
                    <v-subheader>SEARCH</v-subheader>
                    <v-text-field
                        class="mx-2 mb-2" 
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="search"
                        solo-inverted
                        color="purple darken-3"
                    ></v-text-field>

                    <v-subheader>MENU</v-subheader>
                    <v-list-item-group color="purple darken-3">
                        <v-list-item to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/user/dashboard">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/user/mybook">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Manage User</v-list-item-title>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                    <v-btn block dark color="purple darken-3" @click="Singout();">Logout</v-btn>
                    </div>
                </template>    
            </v-navigation-drawer>
        </div> 
    </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebase/firebaseInit')
export default {
    name : "Navbar",
    data : () => ({
        user        : [],
        currentUser : null,
        sidebar     : false,
    }),

    created(){
        if(this.$store.state.currentUser){
            const currentUser    = this.$store.state.currentUser
            const user           = this.$store.state.userProfile
            this.user = user
            this.currentUser = currentUser
        }
    },

    computed: {
            ...mapState(['userProfile'])
        },

    methods: {
        Signout(){
            fb.auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
                    this.$router.push('/login')
            }).catch(err => {
                    console.log(err)
            })
        },
    }

}
</script>