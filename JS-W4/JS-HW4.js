//Step 3:Custom DOM manipulation challenge.

//3.1
let books = ['hundred_years_of_solitude','the_autumn_of_the_patriarch','i_loved_you_more_than_i_should','the_sultans_preacher','the_mockery_of_the_human_mind','macbeth','the_epic_of_gilgamesh','ancient_mesopotamia','death_on_the_nile','people_of_exile'
];

//3.3
 
let lisOfBooks = books.map(function(books){
	
for (let i = 0; i <= books.length - 1; i++) {
	let myList = document.getElementById('list');
	let newLi =	document.createElement('li');
	newLi.innerHTML = document.write(books[i]);
		
}
})

//3.4
let book0 = {bookID:'hundred_years_of_solitude',title:'One hundred years of solitude',language:'Spanish',author:'Gabriel Garcia Marquez'};
let book1 = {bookID:'the_autumn_of_the_patriarch',title:'The autumn of the patriarch',language:'Spanish',author:'Gabriel Garcia Marquez'};
let book2 = {bookID:'i_loved_you_more_than_i_should',title:'I loved you more than i should',language:'Arabic',author:'Atheer Abdullah'};
let book3 = {bookID:'the_sultans_preacher',title:"The sultan's preachers",language:'Arabic',author:'Ali Al-Wardi'};
let book4 = {bookID:'the_mockery_of_the_human_mind',title:'The mockery of the human mind',language:'Arabic',author:'Ali Al-Wardi'};
let book5 = {bookID:'macbeth',title:'Macbeth',language:'English',author:'William Shakespeare'};
let book6 = {bookID:'the_epic_of_gilgamesh',title:'The epic of Gilgamesh',language:'Sumerian translated to English',author:'N. K. Sanders/Anonymous'};
let book7 = {bookID:'ancient_mesopotamia',title:'Ancient_mesopotamia',language:'English',author:'Susan G Pollock'};
let book8 = {bookID:'death_on_the_nile',title:'Death on the nile',language:'English',author:'Agatha Christie'};
let book9 = {bookID:'people_of_exile',title:'People of exile',language:'Arabic',author:'Ahmed Matar'};


/*let lisOfBooks2 = books.map(function(books,){
	let book0 = {bookID:'hundred_years_of_solitude',title:'One hundred years of solitude',language:'Spanish',author:'Gabriel Garcia Marquez'};
let book1 = {bookID:'the_autumn_of_the_patriarch',title:'The autumn of the patriarch',language:'Spanish',author:'Gabriel Garcia Marquez'};
let book2 = {bookID:'i_loved_you_more_than_i_should',title:'I loved you more than i should',language:'Arabic',author:'Atheer Abdullah'};
let book3 = {bookID:'the_sultans_preacher',title:"The sultan's preachers",language:'Arabic',author:'Ali Al-Wardi'};
let book4 = {bookID:'the_mockery_of_the_human_mind',title:'The mockery of the human mind',language:'Arabic',author:'Ali Al-Wardi'};
let book5 = {bookID:'macbeth',title:'Macbeth',language:'English',author:'William Shakespeare'};
let book6 = {bookID:'the_epic_of_gilgamesh',title:'The epic of Gilgamesh',language:'Sumerian translated to English',author:'N. K. Sanders/Anonymous'};
let book7 = {bookID:'ancient_mesopotamia',title:'Ancient_mesopotamia',language:'English',author:'Susan G Pollock'};
let book8 = {bookID:'death_on_the_nile',title:'Death on the nile',language:'English',author:'Agatha Christie'};
let book9 = {bookID:'people_of_exile',title:'People of exile',language:'Arabic',author:'Ahmed Matar'};
	
for (let i = 0; i <= books.length - 1; i++) {
	let myList = document.getElementById('list1');
	if (books[i]=bookID) {
	let newH1 =	document.createElement('li');
	newH1.innerHTML = document.write(bookID);
}*/
let book = [{bookID:'hundred_years_of_solitude',title:'One hundred years of solitude',language:'Spanish',author:'Gabriel Garcia Marquez'},
			{bookID:'the_autumn_of_the_patriarch',title:'The autumn of the patriarch',language:'Spanish',author:'Gabriel Garcia Marquez'},
			{bookID:'i_loved_you_more_than_i_should',title:'I loved you more than i should',language:'Arabic',author:'Atheer Abdullah'},
			{bookID:'the_sultans_preacher',title:"The sultan's preachers",language:'Arabic',author:'Ali Al-Wardi'},
			{bookID:'the_mockery_of_the_human_mind',title:'The mockery of the human mind',language:'Arabic',author:'Ali Al-Wardi'},
			{bookID:'macbeth',title:'Macbeth',language:'English',author:'William Shakespeare'},
			{bookID:'the_epic_of_gilgamesh',title:'The epic of Gilgamesh',language:'Sumerian translated to English',author:'N. K. Sanders/Anonymous'},
			{bookID:'ancient_mesopotamia',title:'Ancient_mesopotamia',language:'English',author:'Susan G Pollock'},
			{bookID:'death_on_the_nile',title:'Death on the nile',language:'English',author:'Agatha Christie'},
			{bookID:'people_of_exile',title:'People of exile',language:'Arabic',author:'Ahmed Matar'}];

			//console.log(book);


/*for (var i = 0; i < book.length; i++) {
	if (book[i].bookID=='macbeth') {
		console.log(book[i]);
	}
		else {console.log('false');}

		}*/

let base = function(books , book){
	
for (let i = 0; i <= books.length-1; i++) {
	let myList1 = document.getElementById('list1');
	if (books[i]===book[i].bookID) {
	let newH1 =	document.createElement('h1');
	newH1.innerHTML = document.write(book[i].bookID);
	let newH2 =	document.createElement('h2');
	newH2.innerHTML = document.write(book[i].title);
	let newH3 =	document.createElement('h3');
	newH3.innerHTML = document.write(book[i].language);
	let newH4 =	document.createElement('h4');
	newH4.innerHTML = document.write(book[i].author);
		
}
else {console.log('false');}

		}
		document.write(base(books,book));
}

