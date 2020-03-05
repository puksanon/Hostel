<template>
    <div class="signup_dialog">
        <v-form ref="signup_form" v-model="signup_form">
            <v-row justify="center">
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn color="purple darken-3" text v-on="on">SIGN UP</v-btn>
                    </template>
                    <v-card>
                        <v-toolbar dark color="purple darken-3">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>SIGN UP</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text :disabled="!signup_form"> SIGN UP</v-btn>
                        </v-toolbar-items>
                        </v-toolbar>
                        <v-list three-line subheader>
                            <v-subheader>User Profile</v-subheader>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            label="First Name"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            label="Last Name" 
                                            required
                                        ></v-text-field>
                                    </v-col>  

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                            label="Personal ID / Passport No." 
                                            required
                                        ></v-text-field>
                                    </v-col>       

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                        label="Phone number"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="6">
                                        <v-text-field 
                                        label="Address"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
                                        label="Country"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
                                        label="City"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="3">
                                        <v-text-field 
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
                                        label="Username"
                                        counter="15"
                                        :rules="usernameRules"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                        label="Password" 
                                        type="password" 
                                        counter="10"
                                        :rules="passwordRules"
                                        required
                                        ></v-text-field>
                                    </v-col>       

                                    <v-col cols="12" xs="12" sm="6" md="4">
                                        <v-text-field 
                                        label="Confirm Password"
                                        type="password" 
                                        counter="10"
                                        :rules="passwordRules"
                                        required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-checkbox
                                            v-model="checkbox"
                                            :rules="checkboxRules"
                                            label="Do you confirm ?"
                                            required
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-form>
    </div>
</template>

<script>
  export default {
    name : "NavbarSignUp",
    data () {
      return {
        dialog      : false,
        signup_form : true,
        username    : '',
        password    : '',
        checkbox    : '',
        email       : '',
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
            password => (password && password.length <= 10) || 'Password must be less than 10 characters',
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
    }
  }
</script>