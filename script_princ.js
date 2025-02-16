$(document).ready(function() {
    $("#search-input").mask("A{1,50}");
});

function performSearch() {
    let query = $('#search-input').val();
    if (query) {
        $('#footer').fadeOut();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                let books = data.items;
                let output = "";

                books.forEach(book => {
                    let title = book.volumeInfo.title;
                    let author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Desconhecido";
                    let description = book.volumeInfo.description || "Sem descrição disponível";
                    let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x192";

                    output += `
                        <div class="book-item">
                            <img src="${thumbnail}" alt="${title}">
                            <h3>${title}</h3>
                            <p><strong>Autor:</strong> ${author}</p>
                            <p>${description}</p>
                        </div>
                    `;
                });

                $('#results').html(output);
            })
            .catch(error => console.error("Erro ao buscar livros: ", error));
    }
}

function clearSearch() {
    $('#search-input').val("");
    $('#results').html("");
    $('#footer').fadeIn();
}