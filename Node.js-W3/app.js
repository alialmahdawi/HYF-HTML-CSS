const fs = require('fs');
var express = require('express');

var server = express();


var list = [];

fs.readFile("list.json", function(err, data) {
    list = JSON.parse(data);

    server.post('/todos/:todo', function(req , res){
      //  var task = JSON.parse(req.params.todo);
        res.set('Content-Type', 'application/Json');
        res.send('this task was added '+ req.params.todo);
       // list.push(task);
    })

server.get('/todos',function(req , res){
    console.log('i am working now');
    res.set('Content-Type', 'application/Json');
    res.send(list);
    console.log(list)
});

server.put('/todos/:id',function(req , res){
var desct = req.params.id ;
list.task['description'] = 'desct';
res.set('Content-Type', 'application/Json');
res.send('this id was added to the description '+ list.task.description);
})

server.delete('/todos/:id',function(req , res){
    let itemToDelete = JSON.parse(req.params.id);
    list.forEach(function (item){
        if (itemToDelete === item.description){
            list.splice(indexOf(item),1);
        }
        else { console.log('no item with such id: '+ req.params.id+' was found!!')}
    });
})
});
 
fs.writeFile("list.json", JSON.stringify(list), function(err) {
    if (err) throw err;
    console.log("Saved!");})

server.listen(8080 , '127.0.0.1' , function(){
    console.log('working fine !!')
});


