<template>
    <div class="ManageUser">
        <ManageUserBackground/>
    </div>
</template>

<script>
const ManageUserBackground = () => import ( '@/components/admin/ManageUserBackground')
export default {
    name : "ManageUser",
    components : {ManageUserBackground}
}
</script>