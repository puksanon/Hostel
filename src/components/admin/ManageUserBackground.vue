<template>
    <div class="ManageUserBackground">
        <Navbar/>
        <div class="header">
            <AdminHeader/>
        </div>
            <div class="main">
                <v-data-table
                    :headers="headers"
                    :items="userlist"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title >Users List</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="800px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="purple darken-3" dark class="mb-2" v-on="on">Create user</v-btn>
                        </template>
                        <v-card>
                            <v-form class="user_form" refs="user_form" v-model="user_form">
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.fname" :rules="inputRules" label="first Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.lname" :rules="inputRules" label="last name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.pid" :rules="inputRules" label="personal Id" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.birthday" :rules="inputRules" label="birthday" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.username" :rules="inputRules" label="username" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.email" :rules="inputRules" type="email" label="email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.password" :rules="inputRules"  label="password" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field outlined  color="purple darken-3" v-model="editedItem.address" :rules="inputRules" label="address" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.country" :rules="inputRules" label="country" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.city" :rules="inputRules" label="city" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.zipcode" :rules="inputRules" label="zipcode" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12"  sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.permission" :rules="inputRules" label="permission" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" >
                                            <v-file-input outlined color="purple darken-3"  :rules="Picrules" accept="image/jpeg" placeholder="Avatar" prepend-icon="mdi-camera" label="hostel-img"></v-file-input>
                                        </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red darken-3" text @click="close">Cancel</v-btn>
                                <v-btn :disabled="!user_form" color="purple darken-3" text @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-form>    
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.action="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item);"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                    <template v-slot:no-data>
                    <v-btn color="purple darken-3" dark @click="Getuserlist">Reset</v-btn>
                    </template>
                </v-data-table>
            </div> 
    </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/Navbar')
const AdminHeader = () => import('@/components/admin/Header')
export default {
    name: "ManageUserBackground",
    components : { Navbar , AdminHeader },
    data: () => ({
      dialog      : false,
      user_form : true,
      headers: [
        { text: 'fname', align: 'start',value: 'fname'},
        { text: 'lname', value: 'lname' },
        { text: 'personal id', value: 'pid' },
        { text: 'email', value: 'email' },
        { text: 'username', value: 'username' },
        { text: 'password', value: 'password', sortable: false },
        { text: 'birthday', value: 'birthday' },
        { text: 'country', value: 'country' },
        { text: 'city', value: 'city' },    
        { text: 'zip code', value: 'zipcode' },
        { text: 'phone', value: 'phone'},
        { text: 'address', value: 'address', sortable: false },
        { text: 'permission', value: 'permission', sortable: false },
        { text: 'avatar', value: 'avatar', sortable: false },
        { text: 'Actions', value: 'action', sortable: false }
      ],
        userlist    : [],
        editedIndex   : -1,
        editedItem:{
            fname     : '',
            lname     : '',
            pid       : '',
            email     : '',
            username  : '',
            password  : '',
            birthday  : '',
            country   : '',
            city      : '',
            zipcode   : '',
            phone     : '',  
            address   : '',
            permission: '',
            avatar    : '',
        },
        defaultItem: {
            fname     : '',
            lname     : '',
            pid       : '',
            email     : '',
            username  : '',
            password  : '',
            birthday  : '',
            country   : '',
            city      : '',
            zipcode   : '',
            phone     : '',  
            address   : '',
            permission: '',
            avatar    : '',
        },
        inputRules: [
            input => !!input || 'input is required',
        ],
        Picrules: [
        value => !value || value.size < 5000000 || 'Avatar size should be less than 5 MB!',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Create user' : 'Update user'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    async created () {
        this.Getuserlist();
    },

    methods: {
        //get list of hostel
        async Getuserlist(){
            await this.axios.get('https://4b91d912-b27e-4147-8134-b26c7ac025bc.mock.pstmn.io/user/list').then(res => {
                this.userlist = res.data
            })
        },

        editItem (item) {
            this.editedIndex = this.userlist.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            const index = item
            confirm('Are you sure you want to delete this item?')
            console.log(index)
            // get api to delete 
            // return prop
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'success',
                    title: 'Delete Hostel success',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                });
        },

        close () {
            this.dialog = false
            setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 300)
        },

        save () {
            if (this.editedIndex > -1) {

                // api insert new hostel
            Object.assign(this.userlist[this.editedIndex], this.editedItem)
            } else {
                // api update hostel
            }
            this.close()
        },
        },
}
</script>