async function getResponse() {
    let response = await fetch('http://localhost:3000/api/statistics')
    let content = await response.json()
    let statistics = document.getElementById('statistics');

    statistics.innerHTML += `
        <div class="block-grid-1">
            <div class="text-grid-1">Начало работы над сайтом: 04.10.2022</div>
        </div>
        
        <div class="block-grid-2">Вес сайта: 173 945 528 байт</div>
        <div class="block-grid-3">Всего строк кода: ${content.lenght}</div>
        <div class="block-grid-4">Книг в базе данных: ${content.books_count}</div>
        <div class="block-grid-5">Страниц в базе данных: ${content.page_books}</div>
        `
}

getResponse()