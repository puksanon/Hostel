<template>
    <div class="HostelDetail">
        <Navbar/>
        <div class="pl_header">
            <Header/>
        </div>

        <div class="main_content bg">
            <div class="toolbar">
                <v-toolbar flat height="60">
                <v-toolbar-title>Hostel Detail</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
            </div>
            <v-container>
                <v-row>
                    <v-col  cols="12" xs="12" sm="12" md="6">
                        <div class="toolbar">
                            <v-toolbar color="transparent" flat height="60">
                            <v-toolbar-title>OVERVIEW</v-toolbar-title>
                            <v-spacer></v-spacer>
                            </v-toolbar>
                        </div>
                        <v-card class="mx-auto">
                            <v-img
                                class="white--text align-end"
                                max-height="300"
                                :src="gotimg(img)"
                                >
                            </v-img>
                        </v-card>
                        <div class="img_collection">
                            <HostelImgCollection @chooseImg="handlechoose"/>
                        </div>
                    </v-col>
                    <v-col  cols="12" xs="12" sm="12" md="6">
                        <RoomDetail/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
const Navbar                = () => import('@/components/navbar/Navbar')
const Header                = () => import('@/components/hostel/Header')
const HostelImgCollection   = () => import('@/components/hostel/HostelImgCollection')
const RoomDetail            = () => import('@/components/hostel/RoomDetail')
export default {
    name : "HostelDetail",
    components : { Navbar ,Header ,HostelImgCollection ,RoomDetail},
    data() {
        return {
            img : ''
        }
    },

    methods:{
        handlechoose(img) {
            this.img = img;
        },

        gotimg(img) {
            return img;
        },
    }
}
</script>

<style scoped>
.bg{
    background-color: #fbfbfb;
}
</style>