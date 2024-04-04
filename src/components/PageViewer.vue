<template>
    <div class="container">
        <h1>Test</h1>
        <p>{{$route.params.index}}</p>
    </div>
</template>
<script>
export default{
    created(){
        this.$route.params.index
    }
}
</script>