// This is the connector (also known as driver)
// that we can use to connect to a MySQL process
// and access its databases.
const mysql = require('mysql');

var args = process.argv.slice(2);

var action = args[0];


class TodoModel {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // Loads all the TODOs in the database
    load(callback) {
        const selectTodoItems = "SELECT * FROM todo_items";
        this.dbConnection.query(selectTodoItems, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }
    //create a new TODO item
    create(description, callback) {
        dbConnection.query('insert INTO todo_items (text) values(?)' + [description], function callback(err, result, fields) {
            if (err) throw err;
            console.log(result);
            console.log(result.affectedRows);
        });

    }

    //update an existing TODO item
    update(id, description, callback) {
        if (action === "update") {
            dbConnection.query('update todo_items set text=? where id=?' + [description, id], function callback(err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
            });

        }
    }
    //delete an existing TODO item
    delete(id, callback) {
        if (action === "delete") {
            dbConnection.query('delete from todo_items where id=?' + [id], function callback(err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
            });

        }
    }
    //add a tag to a TODO item
    tagTodoItem(todoItemId, tagId, callback) {
        if (action === "tagTodoItem") {
            dbConnection.query('insert into todo_item_tag tag_id values(?) inner join todo_items on todo_item_id = id where id=?' + [tagId, todoItemId], function callback(err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
            });

        }
    }
    //remove a tag from a TODO item
    untagTodoItem(todoItemId, tagId, callback) {
        if (action === "untagTodoItem") {
            dbConnection.query('delete from todo_item_tag where todo_item_id=? and tagId=?' + [todoItemId, tagId], function callback(err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
            });

        }
    }
    //mark a TODO item as completed
    markCompleted(todoItemId, callback) {
        if (action === "markCompleted") {
            dbConnection.query('update todo_items set is_completed=true where id=?' + [todoItemId], function callback(err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result.affectedRows);
            });

        }
    }
}

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Elcengali5',
    database: 'todo_app'
});

dbConnection.connect(function (err) {
    if (err != null) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + dbConnection.threadId);
    console.log()
    const todoModel = new TodoModel(dbConnection);
    todoModel.load(function (err, todoItems) {
        if (err) {
            console.log("error loading TODO items:", err);
        }

        console.log("existing todo items:", todoItems);
    });
    todoModel.create(args[1]);
    todoModel.update(args[1], args[2]);
    todoModel.delete(args[1]);
    todoModel.tagTodoItem(args[1], args[2]);
    todoModel.untagTodoItem(args[1], args[2]);
    todoModel.markCompleted(args[1]);
});
