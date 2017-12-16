//1.Hello world in different languages.

console.log('Hello world');
console.log('bonjour le monde');
console.log('سلام يا عالم');
console.log('hej världen');

//2.fix the CODE no matter what it is.

console.log('Im awesome');

//3.X the integer freak.

var x;
console.log('the value of x is undefined');
console.log(x);
x = 10;
console.log('the new value of x is equal to 10');
console.log(x);

//4.Y im i acting-(the string).

var y = "Ali@JS.5";
console.log('the value of y is equal to Ali@JS.5');
console.log(y);
y = "Ali@JS.10";
console.log('the new value of y is equal to Ali@JS.10');
console.log(y);

//5. a 7.25 times geek.

var z = 7.5;
console.log(z);
var a = 7;
console.log(a);
if (z>a) {
	var b = z;
}
console.log(b);

//6. now let's ARRAY.

var arr=[];
console.log('the value of the array is []');
console.log(arr);
var animals=['dog','hawk','jaguar'];
console.log(animals);
animals.push('baby pig');
console.log(animals);

//7.put More strings in your way.

let myString = "this,is,a,test";
console.log(myString);
var length = myString.length;
console.log(length);

//8.is's the SAME TYPE that u have every day.

var q = 12;
var w = 'string';
var e = true;
var r = {firstName:"java", lastName:"script"};
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log('the type of q is: number.');
console.log('the type of w is: string.');
console.log('the type of e is: boolean.');
console.log('the type of r is: object.');
console.log(typeof q);
console.log(typeof w);
console.log(typeof e);
console.log(typeof r);
let i = [typeof q,typeof w,typeof e,typeof r];
let j = [typeof q,typeof w,typeof e,typeof r];

for (i = 0; i <=3; i++) {
	for (j = 0; j <=3; j++){
		if (i===j) {
			console.log('same type.');
		}
		else {console.log('not the same type.');}
	}
}

//9. % will tell u if u should leave or stay.

console.log('the value of x2 is equal to 1')
var x2 = 7;
x = x%3;
console.log(x);
console.log('% devides two numbers.');
console.log('% calculates the remained value from the division.');
console.log('% helps difining the type of numbers (odd or even) by checking the remained value from dividing any number by 2.');


//10.Array has diversity , matter of reality , along with the Infinity.

var n = [35,'thirty five'];
console.log(n);
console.log('it is possible to store multiple types in an array.');

if (6/0 === 10/0){
	console.log('true.');
}
console.log('it is possible to compare infinities.');


//that's it get out :)