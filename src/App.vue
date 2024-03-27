<template>
    <Navbar 
        :pages="pages" 
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"></Navbar>
    <!-- <PageViewer :page="pages[activePage]"></PageViewer> -->
    <CreatePage class="mt-4" @page-created="pageCreated"></CreatePage>
</template>
<script>
import PageViewer from "./components/PageViewer.vue"
import Navbar from "./components/Navbar.vue"
import CreatePage from "./components/CreatePage.vue"

export default {
    components: {
        PageViewer,
        Navbar,
        CreatePage
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
        },
        pageCreated(pageObj){
            this.pages.push(pageObj)
        }
    }
}

</script>