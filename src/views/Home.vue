<template>
    <div class="home">
        <HomeBackground/>
    </div>
</template>

<script>
const HomeBackground            = () => import('../components/home/HomeBackground')
export default {
    name : "home",
    components : { HomeBackground },
}
</script>