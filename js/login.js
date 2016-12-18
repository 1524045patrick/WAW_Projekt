var token ={};


function loginButton(){

    //JSON um den Token zu bekommen
    var tokenJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/login",
        "method": "GET" }

    //Befehl um token zu bekommen
    $.ajax(tokenJSON).done(function (response) {
        token=response;
       localStorage.setItem('token',token);

    });
    if(token!=null){
        window.document.location.href = "main.html";
    }
}
