<template>
    <nav
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"> 
        <div class="container-fluid">
            <a class="navbar-brand" href="">MyVueApp</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
                        <navbar-link
                            :page="page"
                            :index="index"
                            @click="navLinkClick(index)"
                            :isActive="activePage == index">
                        </navbar-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-primary"
                    @click.prevent="changeTheme()">Toggle</button>
                </form>
            </div>
        </nav>
</template>
<script>
import NavbarLink from "./NavbarLink.vue"

export default{
    components: {
        NavbarLink
    },
    created(){
        this.getThemeSetting()
    },
    props: ["pages", "activePage", "navLinkClick"],
    computed: {
        publishedPages(){
            return this.pages.filter(p => p.published == true)
        }
    },
    data(){
        return{
            theme: "dark"
        }
    },
    methods: {
        changeTheme(){
            let theme = "light"
            if(this.theme == "light"){
                theme = "dark"
            }
            this.theme = theme
            this.storeThemeSetting()
        },
        storeThemeSetting(){
            localStorage.setItem('theme', this.theme)
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme')
            if(theme) this.theme = theme
        }
    }
}
</script>