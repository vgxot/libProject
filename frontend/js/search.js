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


const requestURL = 'http://localhost:3000/api/books'

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

document.querySelector('.books').innerHTML = `
        <div class="book-item">
            <div class="book-image">
            <img class="book-image-img" src="/images/books/${content[key].photo-link}.webp">
            </div>
                <div class="book-about">
                <div class="book-name text">${content[key].bookName}</div>
                <div class="book-author text">${content[key].author}</div>
                <div class="book-pages text">${content[key].pages}</div>
                <div class="book-year text">${content[key].year}</div>
                <div class="book-age text">${content[key].age}</div>
            </div>
        </div>`
    for (let key in data) {
        let
    }*/
async function getResponse() {
    let response = await fetch('http://localhost:3000/api/books')
    let content = await response.json()

    let list = document.querySelector('.books')

    let key;

    for (key in content) {
        list.innerHTML += `
        <div class="book-item">
            <div class="book-image">
            <img class="book-image-img" src="/images/books/${content[key].photoLink}.webp">
            </div>
                <div class="book-about">
                <a class="book-name text" href="/${content[key].bookLink}.html">${content[key].bookName}</a>
                <div class="book-author text">${content[key].author}</div>
                <div class="book-pages text">${content[key].pages} страниц</div>
                <div class="book-year text">${content[key].year}</div>
                <div class="book-age text">${content[key].age}</div>
            </div>
        </div>`
    }
}

getResponse()