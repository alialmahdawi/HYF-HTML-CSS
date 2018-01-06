//1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);


//2. Arrays!

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat');
console.log('My new array is :'+ favoriteAnimals);
console.log(favoriteAnimals);
console.log("The array has a length of: "+favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " +favoriteAnimals.indexOf('meerkat'));


//3. More JavaScript

//3.1
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(6,3,2));	

//3.2
function colorCar(color){
	return color;
}
console.log('a '+colorCar('red')+' car.');

//3.3
let obj = {name:'Kryptonite', age:'319',color:'green'};
function objInside(obj){
		return obj;
}
console.log(objInside(obj));

//3.4
function vehicleType(color, code){
	if (code === 1) {
		return color+' car';
	}
	else if (code === 2) {
		return color+' motorbike';
	}
}
console.log('a '+vehicleType('blue', 2));

//3.5

console.log(3 === 3);

//3.6
function vehicle(color, code, age){
	age = age > 1 ? 'used' : 'new';
	if (code === 1) {
		return color+age+' car ';
	}
	else if (code === 2) {
		return color+age+' motorbike ';
	}
}
console.log('a '+vehicle('blue ', 1, 5));

//3.7
let list = ['car','motorbike','caravan','bike'];

//3.8
console.log(list[2]);

//3.9
function vehicle(color, code, age,){
	let list = ['car','motorbike','bike','caravan'];
	age = age > 1 ? 'used ' : 'new ';
	code = (list[code]) ;
	return color+age+code ;
}
console.log('a '+vehicle("green ", 3, 1))

//3.10
let len = list.length ;
let adv = ["Amazing Joe's Garage, we service"];
for (let i =0 ; i<= (len-1) ; i++){
	adv.push(list[i]);
	}
	adv.splice(len, 1, ('and '+list[len-1]+'.'));
	let adv1 = adv.join(', ');
	console.log(adv1);

//3.11
list = ['car','motorbike','caravan','bike','lorry'];
len = list.length ;
let adv0 = ["Amazing Joe's Garage, we service"];
for (let i =0 ; i<= (len-1) ; i++){
	adv0.push(list[i]);
	}
	adv0.splice(len, 1, ('and '+list[len-1]+'.'));
	let adv2 = adv0.join(', ');
	console.log(adv2);

//3.12
let obj1 = {};

//3.13
let obj2 = {Teachers:'Tommy, Victor, Naghmeh, Ester, shamrat, john, Michael'};

//3.14
obj2.Languages = 'Html & Css, Java Script';
console.log(obj2);

//3.15
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log('only the third condition will be true');
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//3.16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
o2.foo = 'far';
console.log(o2);
console.log(o3);
o1.foo = 'car';
console.log(o1);
console.log(o3);

console.log("the order that is used to assign (o3 = o2 or o2 = o3) matters , because we cannot declare o2 two times or assign an undefined variable to it, thats why we need to right it this way o3=o2")

//3.17
let bar = 42; 
console.log(typeof typeof bar);