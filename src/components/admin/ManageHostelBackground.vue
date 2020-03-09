<template>
    <div class="ManageHostelBackground">
        <Navbar/>
        <div class="header">
            <AdminHeader/>
        </div>
            <div class="main">
                <v-data-table
                    :headers="headers"
                    :items="hostelList"
                    :search="search"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title >The Hostel List</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="800px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="purple darken-3" dark class="mb-2" v-on="on">Create Hostel</v-btn>
                        </template>
                        <v-card>
                            <v-form class="hostel_form" refs="hostel_form" v-model="hostel_form">
                                <v-card-title>
                                <span>{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.name" :rules="inputRules" label="Hostel Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.detail" :rules="inputRules" label="detail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.price" :rules="inputRules" label="price( Bath. )" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.type" :rules="inputRules" label="type" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.time" :rules="inputRules" label="time" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field outlined  color="purple darken-3" v-model="editedItem.location" :rules="inputRules" label="location" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" >
                                            <v-text-field outlined color="purple darken-3" v-model="editedItem.website" :rules="inputRules" label="website" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" >
                                            <v-file-input outlined color="purple darken-3"  :rules="Picrules" accept="image/jpeg" placeholder="Pick an hostel imgage" prepend-icon="mdi-camera" label="hostel-img"></v-file-input>
                                        </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="red darken-3" text @click="close">Cancel</v-btn>
                                <v-btn :disabled="!hostel_form" color="purple darken-3" text @click="save">Save</v-btn>
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
                        @click="deleteItem(item.id)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                </v-data-table>
            </div> 
    </div>
</template>

<script>
import { mapState } from 'vuex'
const Navbar = () => import('@/components/navbar/Navbar')
const AdminHeader = () => import('@/components/admin/Header')
import { hostelCollection } from '../../firebase/firebaseInit'
export default {
    name: "ManageHostelBackground",
    components : { Navbar , AdminHeader },
    data: () => ({
        search      : '',
        dialog      : false,
        hostel_form : true,
        currentUser : null,
        user        : [],
        headers: [
            { text: 'name', value: 'name' },
            { text: 'owner Name', value: 'owner' },
            { text: 'detail', value: 'detail' },
            { text: 'price', value: 'price', sortable: false },
            { text: 'type', value: 'type' },
            { text: 'website', value: 'website' , sortable: false},
            { text: 'location', value: 'location' },    
            { text: 'time', value: 'time', sortable: false },
            { text: 'images', value: 'images', sortable: false },
            { text: 'status', value: 'status' },
            { text: 'Actions', value: 'action', sortable: false },
        ],
        HostelList    : [],
        editedIndex   : -1,
        editedItem:{
            name        : '',
            detail      : '',
            price       : '',
            type        : '',
            time        : '',
            location    : '',
            website     : '',
            images      : 'https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3',
        },
        defaultItem: {
            name        : '',
            detail      : '',
            price       : '',
            type        : '',
            time        : '',
            location    : '',
            website     : '',
            images      : 'https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3',
        },
        inputRules: [
            input => !!input || 'input is required',
        ],
        Picrules: [
            value => !value || value.size < 20000000 || 'Avatar size should be less than 20 MB!',
        ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Create Hostel' : 'Manage Hostel'
      },

        ...mapState(['hostelList']),
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    async created () {
        this.getuser();
        // this.GetHostelList();
    },

    methods: {
        getuser(){
            if(this.$store.state.currentUser){
                const currentUser    = this.$store.state.currentUser
                const user           = this.$store.state.userProfile
                this.user            = user
                this.currentUser     = currentUser
            }
        },

        createhostel(){
            const user  = this.user.fname
            const uid   = this.currentUser.uid 
            const status= true
            if(user){
                hostelCollection.add({
                    userId    : uid,
                    owner     : user,
                    status    : status,
                    name      : this.editedItem.name,
                    detail    : this.editedItem.detail,
                    price     : this.editedItem.price,
                    type      : this.editedItem.type,
                    time      : this.editedItem.time,
                    location  : this.editedItem.location,
                    website   : this.editedItem.website,
                    images    : this.editedItem.images
                }).then(() =>{
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Booking success',
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.$router.push('/user/mybook')
                }).catch(err => {
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'erroe',
                        title: err.message,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
            }else{
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Plsase Sign in',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

        editItem (item) {
            this.editedIndex = this.HostelList.indexOf(item)
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
                console.log('test')
            } else {
                this.createhostel();
            }
            this.close()
        },
        },
}
</script>