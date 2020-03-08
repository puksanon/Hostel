<template>
    <div class="AdminDashboardBackground">
        <Navbar/>
        <div class="header">
            <AdminHeader/>
        </div>
        <v-container>
            <div class="main">
                <v-container>
                    <div class="header_title">
                        <h1>Profile</h1>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col cols="12" xs="12" sm="6" md="6" class="text-center">
                                <v-col cols="12">
                                    <v-list-item-avatar size="150">
                                        <img src="https://randomuser.me/api/portraits/women/81.jpg">
                                    </v-list-item-avatar>
                                </v-col>
                            
                                <v-col cols="12">
                                    <v-btn color="blue darken-3" outlined>CHANGE AVATAR</v-btn>
                                </v-col>
                                 <v-col cols="12">
                                    <v-btn color="red darken-3" outlined>EDIT PROFILE</v-btn>
                                </v-col>
                            </v-col>
                            <v-col cols="12" xs="12" sm="6" md="6"  class="text-center">
                                <div class="data_profile">
                                    <h2 class="text-left">INFORMATION.</h2>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-row>
                                                <v-col cols="3">
                                                    <h3>Email</h3>
                                                </v-col>
                                                <v-col cols="9">
                                                    <h3>test</h3>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                         <v-col cols="12">
                                            <v-row>
                                                <v-col cols="3">
                                                    <h3>Email</h3>
                                                </v-col>
                                                <v-col cols="9">
                                                    <h3>test</h3>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                         <v-col cols="12">
                                            <v-row>
                                                <v-col cols="3">
                                                    <h3>Email</h3>
                                                </v-col>
                                                <v-col cols="9">
                                                    <h3>test</h3>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                         <v-col cols="12">
                                            <v-row>
                                                <v-col cols="3">
                                                    <h3>Email</h3>
                                                </v-col>
                                                <v-col cols="9">
                                                    <h3>test</h3>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                         <v-col cols="12">
                                            <v-row>
                                                <v-col cols="3">
                                                    <h3>Email</h3>
                                                </v-col>
                                                <v-col cols="9">
                                                    <h3>test</h3>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>

                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </div> 
        </v-container>
    </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/Navbar')
const AdminHeader = () => import('@/components/admin/Header')
export default {
    name: "AdminDashboardBackground",
    components : { Navbar , AdminHeader },
}
</script>