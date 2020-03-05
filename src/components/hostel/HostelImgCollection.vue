<template>
    <div class="HostelImgCollection">
        <v-row>
            <v-col cols="6" xs="6" sm="6" md="6" v-for="(img , index ) in HostelListImg" v-bind:key="index">
                <v-card
                    class="mx-auto card pointer"
                    max-width="100%"
                    @click="chooseImg(img.img)"
                >
                    <v-img
                        class="white--text align-end card"
                        height="150"
                        :src="img.img"
                        >
                    </v-img>
                </v-card>
            </v-col>
        </v-row>    
    </div>
</template>

<script>
import { HostelList } from "../../data/data.json";
export default {
    name: "HostelImgCollection",
    data() {
        return {
            HostelListImg : HostelList[0].images,
        };
    },

    methods:{
        chooseImg(img) {
        this.$emit("chooseImg", img);
    },
    }
}
</script>

<style scoped>
input {
  display: none;
}

.card img {
  width: 100%;
  height: auto;
  margin: auto;
  display: block;
  max-height: 200px;
  max-width: 150px;
}

.pointer {
  cursor: pointer;
}

.card :hover{
    border: 1px;
}



</style>