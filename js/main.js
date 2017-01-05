
var tokenString = localStorage.getItem('token');
var token = JSON.parse(tokenString);
var student={};
var avatare=[];
var educationplan={};
var scroll =1;
var scrollCounter=0;

function profilBildAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilBildAendern');
    $(document).ready(function() {
    $(document).ready(function() {
        $("#profilePicChange").attr("src",avatare[student.avatarId].avatarBigUrl);
    }); });
}

function passwortAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #passwortAendern');
}

function profilLöschen(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilLöschen');
}

function chapter1(){
    document.body.style.backgroundColor = "#a1c153";
    $('#content').load('ChangeBody.html #chapter1');
}
function chapter2(){
    document.body.style.backgroundColor = "#dbe283";
    $('#content').load('ChangeBody.html #chapter2');
}
function chapter3(){
    document.body.style.backgroundColor = "#bad151";
    $('#content').load('ChangeBody.html #chapter3');
}
function chapter4(){
    document.body.style.backgroundColor = "#7cc3a3";
    $('#content').load('ChangeBody.html #chapter4');
}
function chapter5(){
    document.body.style.backgroundColor = "#ffea64";
    $('#content').load('ChangeBody.html #chapter5');
}
function chapter6(){
    document.body.style.backgroundColor = "#fff3d8";
    $('#content').load('ChangeBody.html #chapter6');
}
function chapter7(){
    document.body.style.backgroundColor = "#ffcf53";
    $('#content').load('ChangeBody.html #chapter7');
}
function chapter8(){
    document.body.style.backgroundColor = "#f5a04c";
    $('#content').load('ChangeBody.html #chapter8');
}
function chapter9(){
    document.body.style.backgroundColor = "#e35184";
    $('#content').load('ChangeBody.html #chapter9');
}
function chapter10(){
    document.body.style.backgroundColor = "#ee7ba9";
    $('#content').load('ChangeBody.html #chapter10');
}
function chapter11(){
    document.body.style.backgroundColor = "#f7bed2";
    $('#content').load('ChangeBody.html #chapter11');
}
function chapter12(){
    document.body.style.backgroundColor = "#c9427e";
    $('#content').load('ChangeBody.html #chapter12');
}
function chapter13(){
    document.body.style.backgroundColor = "#4fa8da";
    $('#content').load('ChangeBody.html #chapter13');
}
function chapter14(){
    document.body.style.backgroundColor = "#94d3e5";
    $('#content').load('ChangeBody.html #chapter14');
}
function chapter15(){
    document.body.style.backgroundColor = "#005daa";
    $('#content').load('ChangeBody.html #chapter15');
}
function chapter16(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #chapter16');
}
function alleKompetenzenStyle(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #alleKompetenzen');
}

function startBild(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #startBild');
}

function login(){
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

function setInfos(){
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
  $('#mobileName').html(student.forename+'  '+student.surname);
  $('#mobileSchule').html(student.school.name);
  $('#mobileKlasse').html("Klasse: "+student.studyGroups.class);
}

var picChange=avatare[student.avatarId];
function changePic(pic){
    picChange=pic;
    $("#profilePicChange").attr("src",avatare[pic].avatarBigUrl);
}

function changePicSave(){
    var changePicJSON = {
        "async": false,
        "url": "",
        "method": "PUT",
        "headers": {
            "authorization":""}}
    changePicJSON.headers.authorization = token.token;
    changePicJSON.url = "http://46.101.204.215:1337/api/V1/avatar/:"+picChange;
    $.ajax(changePicJSON).done(function (response) {
        alter("done");
    });

    startBild();
    login();
};

function kompetenz(id){
    switch(id){
        case 1:chapter1(); break;
        case 2:chapter2(); break;
        case 3:chapter3(); break;
        case 4:chapter4(); break;
        case 5:chapter5(); break;
        case 6:chapter6(); break;
        case 7:chapter7(); break;
        case 8:chapter8(); break;
        case 9:chapter9(); break;
        case 10:chapter10(); break;
        case 11:chapter11(); break;
        case 12:chapter12(); break;
        case 13:chapter13(); break;
        case 14:chapter14(); break;
        case 15:chapter15(); break;
        case 16:chapter16(); break;
    }
 bindButtons();
 scrollTop();
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}

     kompetenzJSON.headers.authorization = token.token;
     kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId="+id;
   var  kompetenz={};
    $.ajax(kompetenzJSON).done(function (response) {
        kompetenz=response;
    });

    var bubbles="";
    var number="";
    for(i=0;i<kompetenz.length;i++){
              scrollCounter++;
             bubbles+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
        if(kompetenz[i].chapterId<10){
            number="0"+kompetenz[i].chapterId;
        }else{
            scrollCounter++;
            number=""+kompetenz[i].chapterId;
        }
            bubbles+="images/chapter"+(number)+"/competenceDone.png\"><div id=\"rechtsAb\"><div id=\"rechts\">Du hast diese Kompetenz am<br>"+kompetenz[i].fromDate+" erreicht!</div></div></div><div id=\"bubbleText\"><p>"
            bubbles+=kompetenz[i].studentText+"</p></div>"
             if(kompetenz[i].number<1000){
               if(kompetenz[i].number<100){
                   if(kompetenz[i].number<10){
                       numberID="000"+kompetenz[i].number;
                   }else{
                       numberID="00"+kompetenz[i].number;
                   }
               }else{
                    numberID="0"+kompetenz[i].number;
               }
           }else{
               numberID=kompetenz[i].number;
           }
            bubbles+="<div id=\"bubbleID\"><p>"+number+"."+numberID+"</p></div></div></div>"

    }

    $(document).ready(function(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
});
}

function kompetenzCheck(id){
    switch(id){
        case 1:chapter1(); break;
        case 2:chapter2(); break;
        case 3:chapter3(); break;
        case 4:chapter4(); break;
        case 5:chapter5(); break;
        case 6:chapter6(); break;
        case 7:chapter7(); break;
        case 8:chapter8(); break;
        case 9:chapter9(); break;
        case 10:chapter10(); break;
        case 11:chapter11(); break;
        case 12:chapter12(); break;
        case 13:chapter13(); break;
        case 14:chapter14(); break;
        case 15:chapter15(); break;
        case 16:chapter16(); break;
    }
bindButtons();
scrollTop();
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}

     kompetenzJSON.headers.authorization = token.token;
     kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=false&chapterId="+id;
   var  kompetenz={};
    $.ajax(kompetenzJSON).done(function (response) {
        kompetenz=response;
    });

    var bubbles="";
    var number="";
    var numberID="";
     for(i=0;i<kompetenz.length;i++){
        if(kompetenz[i].checked){
            scrollCounter++;
             bubbles+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
        if(kompetenz[i].chapterId<10){
            number="0"+kompetenz[i].chapterId;
        }else{
            scrollCounter++;
            number=""+kompetenz[i].chapterId;
        }
            bubbles+="images/chapter"+(number)+"/competenceDone.png\"><div id=\"rechtsAb\"><div id=\"rechts\">Du hast diese Kompetenz am<br>"+kompetenz[i].fromDate+" erreicht!</div></div></div><div id=\"bubbleText\"><p>"
            bubbles+=kompetenz[i].studentText+"</p></div>"
             if(kompetenz[i].number<1000){
               if(kompetenz[i].number<100){
                   if(kompetenz[i].number<10){
                       numberID="000"+kompetenz[i].number;
                   }else{
                       numberID="00"+kompetenz[i].number;
                   }
               }else{
                    numberID="0"+kompetenz[i].number;
               }
           }else{
               numberID=kompetenz[i].number;
           }
            bubbles+="<div id=\"bubbleID\"><p>"+number+"."+numberID+"</p></div></div></div>"
        }
    }

    for(i=0;i<kompetenz.length;i++){
        if(!kompetenz[i].checked){
            scrollCounter++;
            bubbles+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><img class=\"bubbleImg\" src=\""
        if(kompetenz[i].chapterId<10){
            number="0"+kompetenz[i].chapterId;
        }else{
            number=""+kompetenz[i].chapterId;
        }
            bubbles+="images/chapter"+(number)+"/competenceUndone.png\"><p id=\"bubbleText\">"
            bubbles+=kompetenz[i].studentText+"</p>"

           if(kompetenz[i].number<1000){
               if(kompetenz[i].number<100){
                   if(kompetenz[i].number<10){
                       numberID="000"+kompetenz[i].number;
                   }else{
                       numberID="00"+kompetenz[i].number;
                   }
               }else{
                    numberID="0"+kompetenz[i].number;
               }
           }else{
               numberID=kompetenz[i].number;
           }
            bubbles+="<div id=\"bubbleID\"><p>"+number+"."+numberID+"</p></div></div></div>"
         }
    }
    $(document).ready(function(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
});
}

function alleKompetenzen(){
    alleKompetenzenStyle();
    bindButtons();
    scrollTop();
    var bubbles="";
    var number="";
    var numberID="";
     var  kompetenz={};
    var kompetenzJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     kompetenzJSON.headers.authorization = token.token;

     for(a=1;a<=16;a++){
    kompetenzJSON.url = "http://46.101.204.215:1337/api/V1/studentcompetence?checked=true&chapterId="+a;

    $.ajax(kompetenzJSON).done(function (response) {
        kompetenz=response;
    });


    for(i=0;i<kompetenz.length;i++){
              scrollCounter++;
             bubbles+="<div id=\"scroll"+scrollCounter+"\" class=\"bubbles\"><div id=\"bubblesContent\"><div><img class=\"bubbleImg\" src=\""
        if(kompetenz[i].chapterId<10){
            number="0"+kompetenz[i].chapterId;
        }else{
            scrollCounter++;
            number=""+kompetenz[i].chapterId;
        }
            bubbles+="images/chapter"+(number)+"/competenceDone.png\"><div id=\"rechtsAb\"><div id=\"rechts\">Du hast diese Kompetenz am<br>"+kompetenz[i].fromDate+" erreicht!</div></div></div><div id=\"bubbleText\"><p>"
            bubbles+=kompetenz[i].studentText+"</p></div>"
             if(kompetenz[i].number<1000){
               if(kompetenz[i].number<100){
                   if(kompetenz[i].number<10){
                       numberID="000"+kompetenz[i].number;
                   }else{
                       numberID="00"+kompetenz[i].number;
                   }
               }else{
                    numberID="0"+kompetenz[i].number;
               }
           }else{
               numberID=kompetenz[i].number;
           }
            bubbles+="<div id=\"bubbleID\"><p>"+number+"."+numberID+"</p></div></div></div>"

    }

}
    $(document).ready(function(){
   $('#middleContent').html(bubbles);
        hoverBubbles();
});
}

function educationplanSet(){
    var string="";
    var educationplanJSON = {
        "async": false,
        "url": "",
        "method": "GET",
        "headers": {
            "authorization":""}}
     educationplanJSON.headers.authorization = token.token; educationplanJSON.url="http://46.101.204.215:1337/api/V1/educationalPlan";
      $.ajax(educationplanJSON).done(function (response) {
        educationplan=response;
    });
    if(educationplan.length-1>0){
    for(i=0;i<(educationplan.length-1);i++){
            string+="<li ><a href=\"#\" onclick=\"educationplanContent("+educationplan[i]._id+")\">"+educationplan[i].name+"</a></li>";
        }
       string+="<li class=\"lastListItem\"><a href=\"#\" onclick=\"educationplanContent("+educationplan[i]._id+")\">"+educationplan[i].name+"</a></li>";
    }

   $('#educationplan').html(string);

}

function educationplanContent(id){

}

function bindButtons(){
 scrollCounter=0;
 scroll =1;
    $(document).ready(function(){
    $("#scrollButtonUp").click(function() {
    if(scroll>1){
       scroll--;
    }
    $('html, body').animate({
        scrollTop: $("#scroll"+scroll).offset().top -65
    }, 500);
        console.log(scroll);
});
    $("#scrollButtonDown").click(function() {
    if(scroll<scrollCounter){
        scroll++;
    }
        $('html, body').animate({
        scrollTop: $("#scroll"+scroll).offset().top -65
    }, 500);
    });

});
}

function scrollTop(){
    $(document).ready(function(){
			$('body,html').animate({
				scrollTop: 0
			}, 0);
			return false;
    });
}



function hoverBubbles(){
$(".bubbleImg").hover(
    function() {
       $(this).parent().children('#rechtsAb').show();
    },
    function(){
        $(this).parent().children('#rechtsAb').hide();
    }
);
}

function dynamischeBilderDropdown(){
    var sheet = document.createElement('style')
    sheet.innerHTML =
        ".open .dropdown-toggle-profil {content:url(\""
        +avatare[(student.avatarId)].avatarUrl +"\")}"
        +".open .dropdown-toggle-school {content:url(\""
        +student.school.imageUrl+"\")}"
        +".open .dropdown-toggle-studyGroup {content:url(\""
        +student.studyGroups.imageUrl +"\")}";


    document.body.appendChild(sheet);

}




$(document).ready(function(){
    login();
    setInfos();
    educationplanSet();
    dynamischeBilderDropdown();
});
