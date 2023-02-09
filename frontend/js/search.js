var nameInput = document.getElementById('search');
var booksContainer = document.querySelector('.books')


const url = 'http://localhost:3000/api/books/search'
document.getElementById('button').onclick = bookSearch();


async function bookSearch() {
    try {
        document.querySelector('form.search-block').addEventListener('submit', async function value (e) {
            e.preventDefault();
            const value = nameInput.value
            console.log(`отправляем запрос: ${value}`)
            const data = {query: value};
            console.log('data:', value)
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const content = await response.json();
            console.log('ok');
            let list = document.querySelector('.books')
            let key;
            console.log('поиск: ', content)
            for (key in content) {
                list.innerHTML += `                                                                                                                                    
               <div class="book-item">
                   <div class="book-image">
                   <img class="book-image-img" src="/images/img/${content[key].photoLink}">
                   </div>
                       <div class="book-about">
                           <a class="book-name text" href="/${content[key].bookLink}.html">${content[key].bookName}</a>
                           <div class="book-author text">${content[key].author}</div>
                           <div class="book-rating">${content[key].rating}<div class="rating-star"></div></div>
                           <div class="book-pages text">${content[key].pages} страниц</div>
                           <div class="book-year text">${content[key].year}</div>
                           <div class="book-age text">${content[key].age}</div>
                   </div>
               </div>`
            }
        })
    } catch (error) {
        console.error('Ошибка:', error);
    }
}




/*
async function getResponse() {
    let response = await fetch('http://localhost:3000/api/books')
    let content = await response.json()
    let list = document.querySelector('.books')
    let key;

    for (key in content) {
        list.innerHTML += `
        <div class="book-item">
            <div class="book-image">
            <img class="book-image-img" src="/images/img/${content[key].photoLink}">
            </div>
                <div class="book-about">
                    <a class="book-name text" href="${content[key].bookLink}.html">${content[key].bookName}</a>
                    <div class="book-author text">${content[key].author}</div>
                    <div class="rating-block">
                        <div class="book-rating text">${content[key].rating}</div>
                        <img class="rating-star" src="../buttons/star.svg"></img>
                    </div>
                    <div class="book-pages text">${content[key].pages} страниц</div>
                    <div class="book-year text">${content[key].year}</div>
                    <div class="book-age text">${content[key].age}</div>
            </div>
        </div>`
    }
}

getResponse()*/
