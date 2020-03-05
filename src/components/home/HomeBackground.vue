<template>
    <div class="home">
        <Navbar/>
        <div class="carousel_header_highlight">
            <CardCarouselHighlight/>
        </div>

        <div class="toolbar_search">
            <v-toolbar flat height="80">

                <v-toolbar-title>Hostel List</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-form>
                    <v-text-field
                        v-model.lazy="search_input"
                        color="purple darken-3"
                        max-width="100"
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="search"
                        solo-inverted
                    ></v-text-field>
                </v-form>
            </v-toolbar>
        </div>

        <div class="main_card_hostel_content">     
            <CardHostel/>
        </div>
    </div>
</template>

<script>
const Navbar                = () => import('@/components/navbar/Navbar')
const CardHostel            = () => import('@/components/home/CardHostel')
const CardCarouselHighlight = () => import('@/components/home/CardCarouselHighlight')
export default {
    name : "home",
    components : { Navbar ,CardHostel ,CardCarouselHighlight },
    data: () => ({
        search_input: "",
    }),

    watch: {
        search_input: function () {
            this.handleSearchHostel()
        }
    },

    methods: {
        handleSearchHostel(){
            console.log(this.search_input)
            // this.$emit('handleSearchHostel', this.search_input)
        }
    },
}
</script>