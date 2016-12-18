function loginButton(){

    //JSON um den Token zu bekommen
    var tokenJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/login",
        "method": "PUT" }

    //Befehl um token zu bekommen
    $.ajax(tokenJSON).done(function (response) {
      localStorage.setItem('token', JSON.stringify(response));
    });

        window.document.location.href = "main.html";

}


function error1(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error1');
}
function error2(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error2');
}
function error3(){
    $('#fehlermeldungContainer').load('ChangeBody.html #error3');
}
function errorDelete(){
    $('#fehlermeldungContainer').load('ChangeBody.html #errorDelete');
}
