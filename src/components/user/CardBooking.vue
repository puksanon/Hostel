<template>
    <div class="CardBooking">
        <div v-if="bookList">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4" v-for="(book , i) in bookList" v-bind:key="i">
                        <v-card
                        class="mx-auto"
                        max-width="300"
                        outlined
                        dark
                        color="purple darken-3"
                        >
                            <v-card-text class="white--text">
                            <div >id : {{ book.id }}</div>
                            <h1 class="white--text mb-5">
                                {{ book.HostelName }}
                            </h1>
                            <p>{{ book.dateStart }} - {{ book.DateEnd }}</p>
                            <p>ROOM : {{ book.roomType }}</p>
                            <p>Total : {{ book.Totalroom }} room.</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CardBooking",
    data() {
        return {
            
        }
    },

    computed: {
        ...mapState(['bookList'])
    },
}
</script>