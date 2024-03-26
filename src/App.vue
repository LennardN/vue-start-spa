<template>
    <Navbar 
        :pages="pages" 
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"></Navbar>
    <PageViewer :page="pages[activePage]"></PageViewer>
</template>
<script>
import PageViewer from "./components/PageViewer.vue"
import Navbar from "./components/Navbar.vue"

export default {
    components: {
        PageViewer,
        Navbar
    },
    data() {
        return {
            activePage: 0,
            theme: "dark",
            pages: [
                {
                    link: {text: "Home", url: "index.html"},
                    title: "Home Title",
                    content: "This is Home"
                },
                {
                    link: {text: "Contact", url: "index.html"},
                    title: "Contact Title",
                    content: "This is Contact"
                },
                {
                    link: {text: "About", url: "index.html"},
                    title: "About Title",
                    content: "This is About"
                }
            ]
        }
    }
}

</script>