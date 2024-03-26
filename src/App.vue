<template>
    <Navbar 
        :pages="pages" 
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"></Navbar>
    <PageViewer v-if="pages.length > 0" :page="pages[activePage]"></PageViewer>
</template>
<script>
import PageViewer from "./components/PageViewer.vue"
import Navbar from "./components/Navbar.vue"

export default {
    components: {
        PageViewer,
        Navbar
    },
    created(){
        this.getPages()
    },
    data() {
        return {
            activePage: 0,
            theme: "dark",
            pages: []
        }
    },
    methods: {
        async getPages(){
            let res = await fetch('pages.json')
            this.pages = await res.json()
        }
    }
}

</script>