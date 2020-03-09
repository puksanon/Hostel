<template>
    <div class="sign_in_bg">
        <Navbar/>
        <signinbg/>
    </div>
</template>

<script> 
const Navbar = () => import('@/components/navbar/Navbar')
const signinbg = () => import('@/components/login/signin')
export default {
    name: "Signin",
    components: { signinbg ,Navbar }
}
</script>

<style scoped>
.sign_in_bg{
    background-color: #6a1b9a ;
    height: 100%;
}
</style>