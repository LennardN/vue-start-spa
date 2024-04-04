<template>
    <div class="container">
        <h1>{{page.title}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>
<script>
export default{
    created(){
        this.page = this.$pages.getSinglePage(this.$route.params.index)
    },
    data(){
        return {
            page: null
        }
    }
}
</script>