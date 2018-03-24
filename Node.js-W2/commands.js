 help (() =>{ 
    var help1 = {
    help:'display the list of commands',
    add:'add an element to the to-do list',
    remove:'remove an element from the list',
    reset:'reset the whole list',
    list:'display the to do list'
    }
    console.log('help1');
});

var to_do_list = [];

module.exports = {
    help :help,
    to_do_list :to_do_list
}