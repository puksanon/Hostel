<template>
    <div class="home">
        <Navbar/>
    </div>
</template>

<script>
const Navbar = () => import('@/components/navbar/Navbar.vue')
export default {
    name : "home",
    components : { Navbar },
}
</script>