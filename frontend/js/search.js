/*
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

new Vue({
    el: "#search",
    data() {
        return {
            form: {
                query: ''
            }
        }
    },
    computed: {
        canSearch() {
            return this.form.search.trim()
        }
    },
})
*/

async function getResponse() {
    let response = await fetch('http://localhost/api/books')
    let content = await response.json()

    let list = document.querySelector('.books')

    let key;

    for (key in content) {
        list.innerHTML += `
        <div class="book-item">
        <div class="book-image">
          <img class="book-image-img" src="/images/books/${content[key].photo-link}.webp">
        </div>
        <div class="book-about">
          <div class="book-name text">${content[key].book-name}</div>
          <div class="book-author text">${content[key].author}</div>
          <div class="book-pages text">${content[key].pages}</div>
          <div class="book-year text">${content[key].year}</div>
          <div class="book-age text">${content[key].age}</div>
        </div>
        </div>`
    }

}
getResponse()