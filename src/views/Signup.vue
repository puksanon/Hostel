<template>
    <div class="SignUp">
        <SignUpBackground/>
    </div>
</template>

<script> 
const SignUpBackground = () => import('../components/login/signup')
export default {
    name : "SignUp",
    components : { SignUpBackground }
}
</script>