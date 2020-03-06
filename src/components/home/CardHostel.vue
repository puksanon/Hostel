<template>
<div class="card_hostel">
    <v-container>
        <v-row>   
            <v-col cols="12" xs="12" sm="6" md="4"  v-for="hostel in HostelList" v-bind:key="hostel.id">
                <v-card max-width="370" class="mx-auto">
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{ hostel.name }}</v-list-item-title>
                        <v-list-item-subtitle>by {{hostel.owner}} </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-img
                    :src="hostel.images"
                    height="194"
                    ></v-img>

                    <v-card-subtitle>
                    {{ hostel.detail }}
                    </v-card-subtitle>

                    <v-card-subtitle>
                    OPEN {{ hostel.time }}<br>
                    LOCATION {{ hostel.location }}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="purple darken-3"
                        :href="hostel.website"
                    >
                        WEBSITE
                    </v-btn>
                    <v-btn
                        text
                        color="purple darken-3"
                        :to="'/hostel_detail/'+hostel.id"
                    >
                        Detail
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</div>
</template>

<script>

export default {
    name: "CardHostel",
    data() {
        return {
        HostelList : [] ,
        search : ''
        };
    },

    async created() {
        await this.axios.get('https://15d36ad4-97b7-4750-958f-8848ceaca773.mock.pstmn.io/hostel/list').then(res => {
            this.HostelList = res.data
        }).catch(res =>{
            console.error(res)
        })
        
    },

}
</script>