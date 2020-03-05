<template>
    <div class="navbar">
       <v-card class="mx-auto overflow-hidden">
            <v-app-bar
              color="transparent"
              fixed
              flat
              style="border-radius: 0;"
              height="100"
            >
              <v-app-bar-nav-icon  class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

              <v-toolbar-title>Hostel</v-toolbar-title>

              <v-spacer></v-spacer>
              <NavbarSignUp/>
               <v-form ref="signin_form" v-model="signin_form">
                    <v-row justify="center">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                            <template v-slot:activator="{ on }">                         
                                <v-btn color="purple darken-3" class="ml-5" text v-on="on">SIGN IN</v-btn>
                            </template>
                            <v-card>
                                <v-card-title dark>
                                    <span class="headline">SIGN IN</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field 
                                            color="purple darken-3"
                                            v-model="username"
                                            label="Username"
                                            counter="15"
                                            :rules="usernameRules"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field 
                                            color="purple darken-3"
                                            v-model="password"
                                            label="Password" 
                                            type="password" 
                                            counter="10"
                                            :rules="passwordRules"
                                            required
                                            ></v-text-field>
                                        </v-col>       
                                    </v-row>
                                </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn dark color="purple darken-3" text @click="dialog = false">Close</v-btn>
                                    <v-btn color="purple darken-3" :disabled="!signin_form" text :to="'/dashboard'">Sign in</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-form>
            </v-app-bar>
          </v-card>
          <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list
              nav
              dense
            >
              <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>
                  <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          
    </div>
</template>

<script>
const NavbarSignUp = () => import('./NavbarSignUp')

export default {
    name : "NavbarSignIn",
    components: { NavbarSignUp },
    data:() => ({
        drawer      : false,
        group       : null,
        dialog      : false,
        signin_form : true,
        username    : '',
        password    : '',
        usernameRules: [
            username => !!username || 'username is required',
            username => (username && username.length <= 15) || 'username must be less than 15 characters',
        ],
        passwordRules: [
            password => !!password || 'username is required',
            password => (password && password.length <= 10) || 'username must be less than 10 characters',
        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods:{
      validate () {
        if (this.$refs.signin_form.validate()) {
          this.snackbar = true
        }
      },
    }
}
</script>