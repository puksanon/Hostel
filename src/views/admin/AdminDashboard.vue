<template>
    <div class="AdminDashboard">
        <AdminDashboardBackground/>
    </div>
</template>

<script>
const AdminDashboardBackground = () => import('@/components/admin/AdminDashboardBackground')
export default {
    name : "AdminDashboard",
    components : { AdminDashboardBackground }
}
</script>