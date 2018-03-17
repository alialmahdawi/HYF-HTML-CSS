//Week 9 , Step 4

//1.
async function calculateSum(A,B) {
return A+B;
}
let sum = calculateSum(2, 6);
console.log(sum);

 //2.
async function getJSON(url){
    let XHR = new XMLHttpRequest();
    XHR.open('GET',url,true);
    XHR.send();
    XHR.onreadystatechange = ()=>{
        if(XHR.readyState==4){
            var Response = [JSON.parse(XHR.responseText)];
            console.log(Response[0]);
        }
    }
}

async function showResults(result){
   await result;
}
let results =$.getJSON('http://myapi.com');
showResults(results); 

//3.
 async function LargerThanEight(a){
    await a;
        if (a > 8) {
        console.log('larger than 8');
    }
} 
//async function LargerThanEight(){
    /* sum = calculateSum(2, 6).then(()=>{
        if (sum > 7) {
        console.log('larger than 8');
    }}
    ) */
