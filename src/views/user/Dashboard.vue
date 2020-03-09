<template>
    <div class="UserDashboard">
        <UserDashboardBG/>
    </div>
</template>

<script>
const UserDashboardBG = () => import('@/components/user/UserDashboardBG')
export default {
    name : "UserDashboard",
    components : { UserDashboardBG }
}
</script>