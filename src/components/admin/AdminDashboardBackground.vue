<template>
    <div class="AdminDashboardBackground">
        <Navbar/>
    </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/Navbar')
export default {
    name: "AdminDashboardBackground",
    components : { Navbar }
}
</script>