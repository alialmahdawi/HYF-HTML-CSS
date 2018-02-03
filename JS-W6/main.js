//4.1

function foo(func) {
   func() ; 
}

function bar() {
console.log('Hello, I am bar!');
}
foo(bar);


//4.2

let  threeFive = (a ,z , three , five , three_five)=>{
	let arr = [];
for(let i=a ; i <= z ; i++){
arr.push(i);
	if ((i % 3 === 0) && (i % 5 === 0) ){
         three_five();
    }
    else if (i % 3 == 0){
        three ();
    }
     else if ( i % 5 == 0){
         five();

    }
    else if ((i % 3 === 0) && (i % 5 === 0) ){
         three_five();
    }
}
console.log(arr);
};

let divisable_by_three =(()=>{console.log('divisable by three');})
let divisable_by_five = (()=>{console.log('divisable by five');})
let divisable_by_three_five = (()=>{console.log('divisable by three and five')})

threeFive(1,30,divisable_by_three,divisable_by_five,divisable_by_three_five);

//4.3.1

function repeatStringNumTimes(str, num) {
  if(num<0){return ('');}
  let str2='';
  for(let i=1;i<=num;i++){
 str2+=str;
  }
  console.log(str2);
}

repeatStringNumTimes("abc", 3);

//4.3.2

function repeatStringNumTimes2(str, num) {
  if(num<0){return ('');}
  let str2='';
  let i = 1;
  while (i<=num) {
 str2+=str;
    i++;
  }
  
  console.log(str2);
}

repeatStringNumTimes2("abc", 3);

//4.3.3

function repeatStringNumTimes3(str, num) {
  if(num<0){return ('');}
  let str2='';
  let i = 1;
  do {
 str2+=str;
    i++;
  }
  while (i<=num);
  console.log(str2);
}

repeatStringNumTimes3("abc", 3);

//4.7

let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

console.log('Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.However, changing a property of an object referenced by a variable does change the underlying object.');

