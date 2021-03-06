let call = document.getElementById("btn");
call.addEventListener("click", () => makeRequest('https://api.github.com/orgs/HackYourFuture/repos',callback));
function makeRequest(url, callback) {
    console.log('You clicked me')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            var response = [JSON.parse(xhr.responseText)];
            console.log('watch out! here it comes');
            callback(xhr.readyState);
            console.table(response[0]);

           
            renderDOM(response);
        }
    }

    var section = document.createElement('section');
    section.classList.add('container');
    document.body.appendChild(section);


    function renderDOM(repositories) {
        console.log("Rendering results");
        repositories[0].forEach(function (repository) {

            var name = document.createElement('h1');
            var img = document.createElement('img')
            img.src = repository.owner.avatar_url;
            img.height = 25;
            img.width = 25;
            var full_name = document.createElement('h4');
            var Language = document.createElement('h4')
            var span = document.createElement('span');
            name.innerHTML = (repositories[0].indexOf(repository)+1)+'-'+repository.name;
            full_name.innerHTML = repository.full_name;
            Language.innerHTML = repository.language;
            span.innerHTML = repository.id;
            section.appendChild(name);
            section.appendChild(img);
            section.appendChild(full_name);
            section.appendChild(Language);
            section.appendChild(span);

        })
    }
    
}

function callback(err, response) {
    if (response == 4) { console.log('well done '+ response); }
    else {console.log('something went wrong '+ response);  }
}
