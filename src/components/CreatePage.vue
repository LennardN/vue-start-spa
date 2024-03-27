<template>
    <div class="container mb-3">
        <form action="">
           <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="pageTitle"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            rows="5"
                            v-model="pageContent"
                        ></textarea>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link Text
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="linkText"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link URL
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="linkUrl"
                        />
                    </div>
                    <div class="row mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="published"/>
                            <label class="form-check-label" for="gridCheck1">
                                Published
                            </label>
                        </div>
                    </div>
                </div> 
           </div>
           <div class="mb-3">
                <button
                    class="btn btn-primary"
                    @click.prevent="submitForm"
                    :disabled="!isFormInvalid">
                    Create Page 
                </button>
           </div>
        </form>
    </div>
</template>
<script>
export default{
    emits: ['pageCreated'], //Optional
    computed: {
        isFormInvalid(){
            if(this.pageTitle && this.pageContent && this.linkText && this.linkUrl){
                return true
            }
        }
    },
    data(){
        return {
            pageTitle: "",
            pageContent: "",
            linkText: "",
            linkUrl: "",
            published: true
        }
    },
    methods: {
        submitForm(){    
            this.$emit("pageCreated", {
                pageTitle: this.pageTitle,
                pageContent: this.pageContent,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            })
            //this.pageCreated()
            this.pageTitle = ""
            this.pageContent = ""
            this.linkText = ""
            this.linkUrl = ""
            this.published = true
        }
    },
    watch: {
        pageTitle(newTitle, oldTitle){
            if(this.linkText === oldTitle){
                this.linkText = newTitle
            }
        }
    }
}
</script>