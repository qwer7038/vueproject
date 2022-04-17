<template>
    
</template>

<script>
    import axios from 'axios'
    const t2=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:3000
    });

    export default {
        name: "component2",
        created() {
            t2({
                url:'/home/multidata',//注意这里是传入url等配置对象，这个地方可以使用回调
            }).then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>

</style>