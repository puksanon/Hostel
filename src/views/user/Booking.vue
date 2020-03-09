<template>
    <div class="booking_page">
        <BookingGB/>
    </div>
</template>

<script>
const BookingGB = () => import('../../components/user/ManageBook')
export default {
    name : "Booking",
    components : {BookingGB}
}
</script>