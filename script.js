function livetyping1() {  
    var person1in = document.getElementById('person1in').value;  
     document.getElementById('person1out').innerHTML = person1in;   
}

function livetyping2() {  
    var person2in = document.getElementById('person2in').value;  
     document.getElementById('person2out').innerHTML = person2in;   
}

function livetyping3() {  
    var lastnamein = document.getElementById('lastnamein').value;  
     document.getElementById('lastnameout').innerHTML = lastnamein;   
}

function livetyping4() {  
    var weddingdatein = document.getElementById('weddingdatein').value;  
     document.getElementById('weddingdateout').innerHTML = weddingdatein; 
}

function livetyping5() {  
    var weddingtimein = document.getElementById('weddingtimein').value;  
     document.getElementById('weddingtimeout').innerHTML = weddingtimein;   
}

function livetyping6() {  
    var venuein = document.getElementById('venuein').value;  
     document.getElementById('venueout').innerHTML = venuein;   
}

function changeStyle1(){
    var element = document.getElementById("previewoutput");
    document.getElementById("previewoutput").style.backgroundImage = "url('images/image1.jpg')";
    document.getElementById("previewoutput").style.paddingTop = "105px" 
    document.getElementById("previewoutput").style.color = "#333333";
    document.getElementById("previewoutput").style.fontFamily = "Trebuchet MS";
}

function changeStyle2(){
    var element = document.getElementById("previewoutput");
    document.getElementById("previewoutput").style.backgroundImage = "url('images/image2.jpg')";
    document.getElementById("previewoutput").style.paddingTop = "90px" 
    document.getElementById("previewoutput").style.color = "#333333";
    document.getElementById("previewoutput").style.fontFamily = "Brush Script MT";
}

function changeStyle3(){
    var element = document.getElementById("previewoutput");
    document.getElementById("previewoutput").style.backgroundImage = "url('images/image3-1.jpg')";
    document.getElementById("previewoutput").style.paddingTop = "140px" 
    document.getElementById("previewoutput").style.color = "white";
    document.getElementById("previewoutput").style.fontFamily = "Courier New";
}

function convertDigitIn(str){
    return str.split('/').reverse().join('/');
 }
