const buttonAddBook = document.querySelector("#button-add-book");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

buttonAddBook.addEventListener("click", () => {
    dialog.showModal();
})

cancel.addEventListener("click", () => {
    dialog.close();
})

const form = document.querySelector("form");

function renderLibrary(book){
    const main = document.querySelector("main");

    const card = document.createElement("div");
    card.classList.add("book-card");

    const titleBook = document.createElement("p");
    titleBook.classList.add("title-card");
    titleBook.textContent = book.title;

    const authorBook = document.createElement("p");
    authorBook.classList.add("author-card");
    authorBook.textContent = "Author: " + book.author;

    const pagesBook = document.createElement("p");
    pagesBook.classList.add("pages-card");
    pagesBook.textContent = "Number of pages: " + book.pages;

    const readBook = document.createElement("p");
    readBook.classList.add("read-card");
    readBook.textContent = "Read: " + (book.read ? "Yes" : "No");

    const buttonsBook = document.createElement("div");
    buttonsBook.classList.add("buttons-book");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "DELETE";

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "READ";

    buttonsBook.appendChild(deleteButton);
    buttonsBook.appendChild(readButton);

    main.appendChild(card);
    card.appendChild(titleBook);
    card.appendChild(authorBook);
    card.appendChild(pagesBook);
    card.appendChild(readBook);
    card.appendChild(buttonsBook);

    card.dataset.id = book.id;

    deleteButton.addEventListener("click", () =>{
        main.removeChild(card);

        const index = myLibrary.findIndex(b => b.id === book.id);
        if (index !== -1){
            myLibrary.splice(index,1);
        }
        console.log(myLibrary)
    })

    readButton.addEventListener("click", () => {
        book.read = !book.read;
        readBook.textContent = "Read: " + (book.read ? "Yes" : "No");
        });

    console.log(myLibrary)
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pag = document.getElementById("pag").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pag, read);
    const newBook = myLibrary[myLibrary.length-1]
    renderLibrary(newBook);

    console.log(myLibrary);

    dialog.close();
});

