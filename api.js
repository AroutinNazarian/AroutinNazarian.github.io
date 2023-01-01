async function api() { //sends a request to api url and get the data,if that user is available in our github,it gets the data from cookie or get for first time else it replies undefined 
    var url = "https://api.github.com/users/" + document.getElementById("username").value;
    const response = await fetch(url);
    var data = await response.json();
    if ('login' in data) {
        localStorage.setItem(data['login'], JSON.stringify(data))
        return data
    }else {
        document.getElementById("name").innerHTML = console.log("user not found");
        document.getElementById("blog").innerHTML = console.log("user not found");
        document.getElementById("bio").innerHTML = console.log("user not found");
        document.getElementById("location").innerHTML = console.log("user not found");
        document.getElementById("image").src = 'blank-profile-picture-973460__340.png'  
    }
}
function show(val) { //this function show the data of that username
    if (val['login']) {
        document.getElementById("name").innerHTML = val['login'];
        document.getElementById("image").src = val['avatar_url']
        document.getElementById("blog").innerHTML = val['blog'];
        document.getElementById("location").innerHTML = val['location'];
        document.getElementById("bio").innerHTML = val['bio'];
    }
}
function get() { //it get the data from cookie or else it get for first time using getapi function
    var username = document.getElementById("username").value;
    if (localStorage.getItem(username)) {
        show(JSON.parse(localStorage.getItem(username)))
    } else {
        api().then(val => show(val))
    }
}