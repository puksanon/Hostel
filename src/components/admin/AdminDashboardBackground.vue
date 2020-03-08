<template>
    <div class="AdminDashboardBackground">
        <Navbar/>
        <div class="header">
            <AdminHeader/>
        </div>
        <v-container>
            <div class="main">

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