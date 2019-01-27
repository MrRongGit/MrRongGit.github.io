<template>
    <h1>Admin</h1>
</template>
<script>
export default {
    data() {
        return {
            name: "rcw"
        }
    },
    // beforeRouteEnter: (to,from,next) => {
    //     alert('未登录')
    // },
    beforeRouteLeave: (to,from,next) => {
        if(confirm('确定离开吗') == true) {
            next();
        } else {
            next(false);
        }
    }
}
</script>
