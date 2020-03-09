<template>
    <div class="SignUpBackground">
        <Navbar/>
        <div class="signup_dialog">
        <v-form ref="signup_form" v-model="signup_form">
                    <v-card flat>
                        <v-toolbar height="100" dark color="purple darken-3">
                        </v-toolbar>
                        <v-list three-line subheader>
                            <v-subheader>User Profile</v-subheader>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="fname"
                                            outlined
                                            color="purple darken-3"
                                            label="First Name"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field
                                            v-model="lname"
                                            outlined
                                            color="purple darken-3" 
                                            label="Last Name" 
                                            required
                                        ></v-text-field>
                                    </v-col>  

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="pid"
                                            outlined
                                            color="purple darken-3"
                                            label="Personal ID / Passport No." 
                                            required
                                        ></v-text-field>
                                    </v-col>       

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field
                                            outlined
                                            color="purple darken-3"
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="phone"
                                            outlined
                                            color="purple darken-3"
                                            label="Phone number"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="birthday"
                                            outlined
                                            color="purple darken-3"
                                            label="Birthday"
                                            placeholder="DD/MM/YYYY"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="6">
                                        <v-text-field 
                                            v-model="address"
                                            outlined
                                            color="purple darken-3"
                                            label="Address"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
                                            v-model="country"
                                            outlined
                                            color="purple darken-3"
                                            label="Country"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
                                            v-model="city"
                                            outlined
                                            color="purple darken-3"
                                            label="City"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
                                            v-model="zipcode"
                                            outlined
                                            color="purple darken-3"
                                            label="ZIP code"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list three-line subheader>
                            <v-subheader>User Register</v-subheader>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="username"
                                            outlined
                                            color="purple darken-3"
                                            label="Username"
                                            counter="15"
                                            :rules="usernameRules"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="password"
                                            outlined
                                            color="purple darken-3"
                                            label="Password" 
                                            type="password" 
                                            counter="15"
                                            :rules="passwordRules"
                                            required
                                        ></v-text-field>
                                    </v-col>       

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            v-model="cfpassword"
                                            outlined
                                            color="purple darken-3"
                                            label="Confirm Password"
                                            type="password" 
                                            counter="15"
                                            :rules="passwordRules"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-checkbox
                                            color="purple darken-3"
                                            v-model="checkbox"
                                            :rules="checkboxRules"
                                            label="Do you confirm ?"
                                            required
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list>
                        <v-toolbar height="80" dark color="purple darken-3">
                        <v-toolbar-title>SIGN UP</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text to="/login"> SIGN IN</v-btn>
                            <v-btn dark text :disabled="!signup_form" @click="SingUp();"> SIGN UP</v-btn>
                        </v-toolbar-items>
                        </v-toolbar>
                    </v-card>
        </v-form>
    </div>
    </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/Navbar')
import { usersCollection , auth } from '../../firebase/firebaseInit'
export default {
    name : "SignUpBackground",
    components : { Navbar },
    data () {
      return {
        dialog      : false,
        signup_form : true,
        fname       : '',
        lname       : '',
        pid         : '',
        email       : '',
        phone       : '',
        birthday    : '',
        address     : '',
        country     : '',
        city        : '',
        zipcode     : '',
        username    : '',
        password    : '',
        cfpassword  : '',
        checkbox    : '',
        emailRules: [
            email => !!email || 'E-mail is required',
            email => /.+@.+\..+/.test(email) || 'E-mail must be valid',
        ],
        usernameRules: [
            username => !!username || 'Username is required',
            username => (username && username.length <= 15) || 'Username must be less than 15 characters',
        ],
        passwordRules: [
            password => !!password || 'Password is required',
            password => (password && password.length >= 6) || 'Password must be more than 6 characters',
            password => (password && password.length <= 15) || 'Password must be less than 15 characters',
        ],
        checkboxRules: [
            checkbox => !!checkbox || 'You must agree to continue!'
        ],
      }
    },

    methods:{
        validate () {
            if (this.$refs.signup_form.validate()) {
            this.snackbar = true
            }
        },

        async SingUp(){
            if (this.password === this.cfpassword ){
                await auth.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
                    const Uid       = res.user.uid 
                    usersCollection.doc(Uid).set({
                        fname       : this.fname,
                        lname       : this.lname,
                        pid         : this.pid,
                        email       : this.email,
                        phone       : this.phone,
                        birthday    : this.birthday,
                        address     : this.address,
                        country     : this.country,
                        city        : this.city,
                        zipcode     : this.zipcode,
                        username    : this.username,
                        password    : this.password,
                        permission  : 'user'
                    }).then(() =>{
                        this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: 'insert data success',
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.$router.push('/login')
                    }).catch(err => {
                        this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'error',
                            title: err.message,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
                }).catch(err => {
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: err.message,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 1500
                    })
                });           
            }else{
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Confirm Password not same Password',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

    }
}
</script>