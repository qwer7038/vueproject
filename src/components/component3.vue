
<template>
    
</template>

<script>
    import { func001 }  from "../config/request.js"
    export default {
        name: "component3",
        created() {
             func001({
                url:'/home/multidata',
            }).then(res=>{
                 console.log(res)
             })
        }
    }
</script>

<style scoped>

</style>