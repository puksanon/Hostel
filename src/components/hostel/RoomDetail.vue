<template>
    <div class="RoomDetail">
        <div class="toolbar">
            <v-toolbar color="transparent" flat height="60">
            <v-toolbar-title>ROOM TYPE</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
        </div>
        <v-card
            v-for="room in HostelRoomType"
            :key="room.id"
            flat
            dark
            style="border-radius: 0;"
            class="mb-5"
            height="200"
        >
            <v-img
            height="200" 
            :src="room.room_img">

                <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title
                    v-text="room.name"
                    ></v-card-title>

                    <v-card-subtitle>
                        {{room.detail}}
                    </v-card-subtitle>
                    
                </div>
                </div>
                <v-card-actions>
                    <v-card-subtitle>
                        PEOPLE : {{room.peopleNum}}
                        <br>
                        PRICE : {{room.price}} /Day.
                        <br>
                        TOTAL : {{room.roomTotal}}
                        <br>
                    </v-card-subtitle>
                    <v-spacer></v-spacer>
                        <div class="bookbtn" v-if="room.roomTotal <= 0">
                            <v-btn
                                outlined
                                disabled
                                dark
                            >
                                BOOK
                            </v-btn>
                        </div>
                        <div class="bookbtn" v-else>
                            <v-btn outlined dark @click="handleBooking(room)">BOOK</v-btn>
                            <v-form ref="payment_form" v-model="payment_form">
                                <v-row justify="center">
                                    <v-dialog v-model="dialog" persistent max-width="600px">
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">Payment</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <small>*Accepted Credit and Debit Card</small>
                                                    <v-row>

                                                        <v-col cols="12">
                                                            <v-text-field 
                                                                outlined
                                                                clearable
                                                                color="purple darken-3"
                                                                label="Card Number*" 
                                                                required>
                                                            </v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field 
                                                                outlined
                                                                clearable
                                                                color="purple darken-3"
                                                                label="Name on card" 
                                                                required>
                                                            </v-text-field>
                                                        </v-col>

                                                        <v-col cols="4" sm="3" md="3">
                                                            <v-text-field
                                                                outlined
                                                                clearable
                                                                color="purple darken-3"
                                                                label="Month"
                                                                required
                                                            ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="4" sm="3" md="3">
                                                            <v-text-field
                                                                outlined
                                                                clearable
                                                                color="purple darken-3"
                                                                label="Year"
                                                                required
                                                            ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="4" sm="3" md="3">
                                                            <v-text-field
                                                                outlined
                                                                clearable
                                                                color="purple darken-3"
                                                                label="CVV"
                                                                required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <div class="payment_detail">
                                                                <v-card flat>
                                                                    <v-card-title>
                                                                        <span>DETAIL</span>
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-row>
                                                                            <v-col cols="6">
                                                                                <v-text-field
                                                                                    v-model.lazy="DateStart"
                                                                                    :rules="BookNumRules"
                                                                                    outlined
                                                                                    clearable
                                                                                    color="purple darken-3"
                                                                                    label="Date Start"
                                                                                    required
                                                                                ></v-text-field>
                                                                            </v-col>   
                                                                            <v-col cols="6">
                                                                                <v-text-field
                                                                                    v-model.lazy="DateEnd"
                                                                                    :rules="BookNumRules"
                                                                                    outlined
                                                                                    clearable
                                                                                    color="purple darken-3"
                                                                                    label="Date End"
                                                                                    required
                                                                                ></v-text-field>
                                                                            </v-col>   
                                                                            <v-col cols="6">
                                                                                <v-text-field
                                                                                    v-model.lazy="BookNum"
                                                                                    :rules="BookNumRules"
                                                                                    outlined
                                                                                    clearable
                                                                                    color="purple darken-3"
                                                                                    label="Number of rooms booked"
                                                                                    required
                                                                                ></v-text-field>
                                                                            </v-col>   
                                                                            <v-col cols="3">
                                                                                <v-text-field
                                                                                    flat
                                                                                    disabled
                                                                                    :value="'x' + Roomtype.price"
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="3">
                                                                                <v-text-field
                                                                                    v-model="TotalPrice"
                                                                                    flat
                                                                                    disabled
                                                                                    :value="'=' + TotalPrice"
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </div>
                                                        </v-col>

                                                        <v-col cols="12">
                                                            <v-checkbox
                                                                color="purple darken-3"
                                                                :rules="[v => !!v || 'You must agree to continue!']"
                                                                label="Do you confirm?"
                                                                required
                                                            ></v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="red darken-1" text @click="ClearForm()">Cancel</v-btn>
                                            <v-btn color="purple darken-3" :disabled="!payment_form" text @click="Booking(room)">confirm</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
                            </v-form>
                        </div>
                </v-card-actions>
            </v-img>    
        </v-card>
    
    </div>
</template>

<script>
import { Hostel } from "../../data/data.json";
export default {
    name: "RoomDetail",
    data() {
        return {
            payment_form    : true,
            HostelRoomType  : Hostel[0].room,
            Hotal           : Hostel[0],
            user            : [],
            snackbar        : false,
            timeout         : 2000,
            dialog          : false,
            TotalPrice      : '',
            BookNum         : '',
            DateStart       : '',
            DateEnd         : '',
            Roomtype        : [],
            currentUser     : null,
            BookNumRules    : [
            BookNum => !!BookNum || 'input is required',
        ],
        }
    },

    //cheack permission and vertify user 
    //*ถ้าเปลี่ยนไปใช้ firebase auth ตรงนี้ก็จะกลายเป็นการเรียกขอมูล user ใน vuex มาใช้เเทนเพื่อตรวจสอบข้อมูลของผู้ใช้ก่อนทำรายการ
    created() {
        if(this.$store.state.currentUser){
            const currentUser    = this.$store.state.currentUser
            const user           = this.$store.state.userProfile
            this.user = user
            this.currentUser = currentUser
        }
    },

     watch: {
        BookNum: function () {
            this.TotalPrice = this.BookNum * this.Roomtype.price
        }
    },


    methods:{
        handleBooking(room){
            if (!this.user || !this.currentUser){
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Plsase Sign in',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                this.dialog = true;
                this.Roomtype = room;
            }
        },

        ClearForm(){
            this.BookNum = '';
            this.dialog  = false;
        },

        Booking(){
            //มีห้องว่างไม่พอ
            //const HostelId  = this.Hotal.hotelId *ใช้เอาไว้เก็บค่า id ของโรงเเรม ตอนเสร้าง object จองห้อง จะเก็บ id ของโรงเเรม id tyoe ของห้อง เเละ id ของผู้จอง
            const roomTotal = this.Roomtype.roomTotal;
            const BoookRoom = this.BookNum
            const user      = this.user
            if (user)
            { 
                if(user.permission === 'user')
                {
                    if(roomTotal >= BoookRoom)
                    {
                        //do function save to database
                        //return status
                        this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: 'Booking Success',
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        })
                            this.$router.push('/')
                    }else{
                            this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'error',
                            title: 'Not enough room available',
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }else{
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: 'You are not user',
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }else{
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Not enough room available',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
}
</script>