CREATE DATABASE ToDoList;
CREATE TABLE Users (
    UserID INT,
    FirstName CHAR(255),
    LastName CHAR(255),
);

CREATE TABLE ToDo_List (
    UserID INT,
    ToDoItem TEXT,
    Tags CHAR(255),
    MarkAsDone BINARY,

);