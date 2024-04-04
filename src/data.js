const pagesKey = 'pages'

let pageJson = localStorage.getItem(pagesKey)
let pagesStore = JSON.parse(pageJson)

export default{
    getAllPages(){
        return pagesStore
    },
    getSinglePage(index){
        console.log(index)
        return pagesStore[index]
    }
}