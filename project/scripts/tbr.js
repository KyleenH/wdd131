const input = document.querySelector("#tbr");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let booksArray = getBookList() || [];
booksArray.forEach(book => {
	displayList(book);
});
button.addEventListener('click', () => {
	if (input.value != '') {
		displayList(input.value);
		booksArray.push(input.value);
		setBookList();
		input.value = '';
		input.focus();
	}
});
function displayList(item) {
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	li.textContent = item;
	deletebutton.textContent = '❌';
	deletebutton.classList.add('delete');
	li.append(deletebutton);
	list.append(li);
	deletebutton.addEventListener('click', function (){
		list.removeChild(li);
		deleteBook(li.textContent);
		input.focus();
	});
	console.log('poop')
}
function setBookList() {
	localStorage.setItem('myTBRList', JSON.stringify(booksArray));
}
function getBookList() {
	return JSON.parse(localStorage.getItem('myTBRList'));
}
function deleteBook(book){
	book = book.slice(0, book.length - 1);
	booksArray = booksArray.filter(item => item !== book);
}
