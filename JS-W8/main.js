function makeRequest(url,callback){
    console.log('You clicked me')
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
          callback(response);
        }
        
    }
    xhr.open('get', url, true);
    xhr.send();
}
let div = document.createElement('div');
let body = document.createElement('p');
document.body.appendChild(div);
div.appendChild(body).innerHTML= makeRequest('https://api.github.com/orgs/HackYourFuture/repos');

function callback(err,response){
    if(xhr.readyState == 4){return response}
    else if (!xhr.send()){return xhr.status}
}