<template>
    <div class="HostelDetail">
        <HostelBackground/>
    </div>
</template>

<script>
const HostelBackground = () => import('../components/hostel/HostelBackground')
export default {
    name : "HostelDetail",
    components : { HostelBackground },
}
</script>