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
                            <input class="form-check-input" type="checkbox"/>
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
                    @click.prevent="submitForm">
                    Create Page
                </button>
           </div>
        </form>
    </div>
</template>
<script>
export default{
    props: ['pageCreated'],
    data(){
        return {
            pageTitle: "",
            pageContent: "",
            linkText: "",
            linkUrl: ""
        }
    },
    methods: {
        submitForm(){
            if(!this.pageTitle || !this.pageContent || !this.linkText || !this.pageTitle){
                alert("Form is not filled")
                return
            }
            this.pageCreated({
                pageTitle: this.pageTitle,
                pageContent: this.pageContent
            })
        }
    }
}
</script>