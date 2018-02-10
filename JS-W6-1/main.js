//5.1

let addSix = (num)=>{console.log(num+6);}
addSix(100);

//5.2 (Bonus)
let array=['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

let Unique = ((array)=>array.filter((item,index,array)=>{return(index==array.indexOf(item))}))

console.log(Unique(array));