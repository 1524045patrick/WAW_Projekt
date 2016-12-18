
var token ={};
var student={};
var avatare=[];

function login(){
    //JSON um den Token zu bekommen
    var tokenJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/login",
        "method": "PUT" }

    //JSON um den Student zu bekommen
    var studentJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/student",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //JSON Avatare
    var avatareJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/avatar",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //Befehl um token zu bekommen
    $.ajax(tokenJSON).done(function (response) {
        token=response;
    });

    //ändere den token in studentJSON und avatareJSON
    studentJSON.headers.authorization = token.token;
    avatareJSON.headers.authorization = token.token;

    //Befehl um student zu bekommen
    $.ajax(studentJSON).done(function (response) {
    student=response;
    });

    //Befehl um avatare zu bekommen
    $.ajax(avatareJSON).done(function (response) {
    avatare=response;
    });


}

login();

$(document).ready(function() {
  $('#name').html(student.forename+'<br>'+student.surname);
  $("#nameImg").attr("src",avatare[student.avatarId].avatarBigUrl);
  $("#profilePic").attr("src",avatare[student.avatarId].avatarInactiveUrl);
  $("#schoolPic").attr("src",student.school.imageUrlBig);
  $('#schoolName').html(student.school.name);

  var adresse = student.school.address;
  var resAdresse = adresse.split(",");
  $('#dropdownInfos').html(resAdresse[0]+"<br>"+resAdresse[1]+"<br>"+student.school.country);
  $('#dropdownInfosLast').html("<br>"+student.school.email+"<br>"+student.school.telefon);

  $("#klassePic").attr("src",student.studyGroups.imageUrlBig);
  $("#klassePicBig").attr("src",student.studyGroups.imageUrlInactive);
  $('#klasseName').html("Klasse<br>"+student.studyGroups.class);
  $('#dropdownInfosLastName').html(student.formteacher);

});


