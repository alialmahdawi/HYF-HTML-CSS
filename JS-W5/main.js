//2.1

let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(number=>(number % 2 !== 0)
).map(number=>{return (number * 2)});
console.log("The doubled numbers are", newNumbers);



//2.2

let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Fix homework for class10',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];

let tuesday = [
        {
            name     : 'Keep writing summary',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];

let tasks = monday.concat(tuesday);

//2.2.1
console.log(tasks);

//2.2.2

let taskPerHour = tasks.map((task,index,tasks)=> {return task.duration/60})
console.log(taskPerHour);

//2.2.3

let least= taskPerHour.filter(number=>{return number<2})
console.log(least);

//2.2.4

let billing = taskPerHour.map(number=>{return number*160})
console.log(billing);

let sum = 0;
billing.forEach(element=> {sum += element})
console.log(sum); 

//2.2.5
console.log('The formatted Euro amount is ' + sum/9 + ' Euro');
