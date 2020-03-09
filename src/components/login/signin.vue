<template>
    <div class="sign_in">
            <v-form ref="signin_form" v-model="signin_form" >
                    <v-row justify="center" class="signin_form">
                            <v-card min-width="350">
                                <v-card-title dark>
                                    <span >SIGN IN</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field 
                                            color="purple darken-3"
                                            v-model="email"
                                            label="email"
                                            :rules="emailRules"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field 
                                            color="purple darken-3"
                                            v-model="password"
                                            label="Password" 
                                            type="password" 
                                            counter="15"
                                            :rules="passwordRules"
                                            required
                                            ></v-text-field>
                                        </v-col>       
                                    </v-row>
                                </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn dark color="purple darken-3" text to="/signup">Sign UP</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="purple darken-3" :disabled="!signin_form" text @click="SignIn()">Sign in</v-btn>
                                </v-card-actions>
                            </v-card>
                    </v-row>
                </v-form>
    </div>
</template>

<script>
import { auth } from '../../firebase/firebaseInit'
export default {
    name : "signin",
    data:() => ({
        dialog      : false,
        signin_form : true,
        performingRequest: false,
        email       : '',
        password    : '',
        emailRules: [
            email => !!email || 'E-mail is required',
            email => /.+@.+\..+/.test(email) || 'E-mail must be valid',
        ],
        passwordRules: [
            password => !!password || 'Password is required',
            password => (password && password.length >= 6) || 'Password must be more than 6 characters',
            password => (password && password.length <= 15) || 'Password must be less than 15 characters',
        ],
    }),

    created(){
        auth.onAuthStateChanged(user => {
            if (user) {
                this.$router.push('/')
            }
        })
    },

    methods:{
        validate () {
            if (this.$refs.signin_form.validate()) {
            this.snackbar = true
            }
        },

        reset_form(){
            this.email    = '',
            this.password = ''
        },

        //finish can login with email and passwod auth form firebase
        async SignIn(){
            this.performingRequest = true
                await auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
                    this.$store.commit('setCurrentUser', user)
                    this.$store.dispatch('fetchUserProfile')
                    this.performingRequest = false
                    this.$router.push('/')
                }).catch(err => {
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: err.message,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    this.performingRequest = false
                })
        }
    }
}
</script>

<style scoped>
.sign_in{
position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>