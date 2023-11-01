const myLibrary = [];
// UI
let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let readStatus = document.getElementById("read-status")
let readBtn  = document.getElementById("read-btn")
let cardContainer = document.getElementById("card-container")

// OPEN AND CLOSE MODAL 
const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]")
const modal =document.querySelector("[data-modal]")

openButton.addEventListener("click", () => {
  modal.showModal()
})

closeButton.addEventListener("click", () => {
  modal.close()
})

function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages
  this.readStatus = readStatus
}

function addBookToLibrary() {
  // do stuff here
  let bookTitle = title.value
  let bookAuthor = author.value
  let bookPages = pages.value
  let bookStatus = readStatus.checked
  let personal = new Book(bookTitle, bookAuthor, bookPages, bookStatus)
  myLibrary.push(personal)
  createBook(bookTitle, bookAuthor, bookPages, bookStatus)
}

function createBook(bookTitle, BookAuthor, BookPages, readStatus) {
  const bookCard = document.createElement("div")
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const readBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')

  // Attaching classNames and Attributes
  bookCard.classList.add("single-card")
  readBtn.classList.add("btn")
  deleteBtn.classList.add("btn")
  
  let libraryLength = myLibrary.length
  if (libraryLength == 0) {
    readBtn.setAttribute("data-index", 0)
    deleteBtn.setAttribute("data-index", 0)
  }else if (libraryLength > 0) {
    readBtn.setAttribute("data-index", libraryLength - 1)
    deleteBtn.setAttribute("data-index", libraryLength - 1)
  }

  // Inserting book details 
  title.textContent = `"${bookTitle}"`
  author.textContent = BookAuthor
  pages.textContent = BookPages
  deleteBtn.textContent = "Remove"

  if (readStatus == true) {
    readBtn.textContent = "Read"
    readBtn.classList.add("green-btn")
    console.log(readStatus)
  }else {
    readBtn.textContent = "Not Read"
    readBtn.classList.add("red-btn")
  }

  // Appending the created  elements to single card
  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(readBtn)
  bookCard.appendChild(deleteBtn)
  
  cardContainer.appendChild(bookCard)
  
  // ADDING EVENT LISTENERS
  readBtn.onclick = toggleReadStatus
}

const toggleReadStatus = (e) => {
  let libraryIndex = e.target.dataset.index
  let status = myLibrary[libraryIndex].readStatus
  if (status == true) {
    myLibrary[libraryIndex].readStatus = false
    e.target.innerText = "Not Read"
    e.target.className ="btn red-btn"
  }else {
    myLibrary[libraryIndex].readStatus = true
    e.target.innerText = "Read"
    e.target.className ="btn green-btn"
  }
  // toggleReadBtn(libraryIndex)
  console.log(e)
}

const toggleReadBtn = (index) => {

}