<template>
    <div class="MybookingBg">
        <Navbar/>
        <AdminHeader/>
        <div class="main_content">
             <div class="toolbar_search">
                <v-toolbar flat height="80">

                <v-toolbar-title>Booking List</v-toolbar-title>

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

            <div class="card_book">
                <CardBooking/>
            </div>
        </div>
    </div>
</template>

<script>
const Navbar        = () => import('@/components/navbar/Navbar')
const AdminHeader   = () => import('@/components/admin/Header')
const CardBooking   = () => import('@/components/user/CardBooking')
export default {
    name: "MybookingBg",
    components : {Navbar, AdminHeader ,CardBooking},
    data: () =>({
        search_input: ''
    }),
}
</script>