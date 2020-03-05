<template>
    <div class="RoomDetail">
        <div class="toolbar">
            <v-toolbar color="transparent" flat height="60">
            <v-toolbar-title>ROOM TYPE</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
        </div>
        <v-card
            v-for="room in Hostel"
            :key="room.id"
            flat
            dark
            style="border-radius: 0;"
            class="mb-1"
            height="200"
        >
        <v-img
        height="200" 
        :src="room.room_img">

            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
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
                    PRICE : {{room.price}}
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
                        <v-snackbar
                            dark
                            right
                            color="purple darken-3"
                            v-model="snackbar"
                            :timeout="timeout"
                            >
                        {{ err }}
                        <v-btn
                            text
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>
                        </v-snackbar>
                        <v-btn
                            outlined
                            dark
                            @click="handleBooking(room)"
                        >
                            BOOK
                        </v-btn>
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
            Hostel      : Hostel[0].room,
            user        : "",
            snackbar    : false,
            err         : '',
            timeout     : 2000
        }
    },

    methods:{
        handleBooking(room){
            if (!this.user){
                this.snackbar = true
                this.err      = "Please sign in"
            }else{
                console.log(room)
            }
        }
    }
}
</script>