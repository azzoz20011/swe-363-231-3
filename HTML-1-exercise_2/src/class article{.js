class article{
    constructor(listOfArticles){
    this.listOfArticles = listOfArticles
    this.articleList = []
    }
    static createArticle (title, text) {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const para = document.createElement('p')
        h3.appendChild(title)
        para.appendChild(text)
        li.appendChild(h3)
        li.appendChild(para)
        return li
    }
}