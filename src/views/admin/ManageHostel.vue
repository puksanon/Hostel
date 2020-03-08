<template>
    <div class="ManageHostel">
        <ManageHostelBackground/>
    </div>
</template>

<script>
const ManageHostelBackground = () => import ( '@/components/admin/ManageHostelBackground')
export default {
    name : "ManageHostel",
    components : {ManageHostelBackground}
}
</script>