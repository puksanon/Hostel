<template>
    <div class="Navbar">
      <div class="navbar_signin" v-if="permission === ''">
          <NavBarSignin/>
      </div>
      <div class="admin_nav" v-else-if="permission === 'admin'">

      </div>
        
    </div>
</template>

<script>
const NavBarSignin = () => import('./NavbarSignIn')

export default {
    name : "Navbar",
    components: { NavBarSignin },
    data : () => ({
      permission  : '',
    }),

}
</script>