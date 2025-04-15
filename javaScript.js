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

function renderLibrary(){
    const main = document.querySelector("main");
    const card = document.createElement("div");
    card.classList.add("book-card");
    main.appendChild(card);
}

form.addEventListener("submit", function(event) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pag = document.getElementById("pag").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pag, read);
    console.log(myLibrary);
    dialog.close();
    event.preventDefault();
});

console.log(myLibrary)

