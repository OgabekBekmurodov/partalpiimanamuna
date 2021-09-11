function idtekshir(){
    const identifikatsiya=document.getElementById("identifikatsiyaid");
    const shaxsiykabinet=document.getElementById("shaxsiykabinet");
    
    identifikatsiya.style.marginTop="4px";
    identifikatsiya.style.backgroundColor="black";
    identifikatsiya.style.fontSize="10px";
    shaxsiykabinet.style.backgroundColor="black";
    identifikatsiya.style.padding="0 3px 0 3px";
    document.querySelector('.tgazoboling').style.backgroundColor="black";
    if(document.getElementById("idsoni").value<8){
        document.getElementById("belgi8ta").style.display="block";
        document.getElementById("belgi8ta").style.color="red";

    }
    if(document.getElementById("idsoni").value>=8){
        document.getElementById("belgi8ta").style.display="none";
    }
}
function asosoiytil(){
    const tillar=document.getElementById("tillar");
   
    if(tillar.style.display="none"){
         tillar.style.display="block";
    }
    else{
        tillar.style.display="none";
    }
}
function  uzbektili(){
    document.getElementById("tillar").style.display="none";
    const asosiytil=document.getElementById("asosittil");
    asosiytil.innerHTML="<img src=\"./flag-400.png\"><h2>UZ</h2>"
    
}
function  rustili(){
    document.getElementById("tillar").style.display="none";
    const asosiytil=document.getElementById("asosittil");
    asosiytil.innerHTML="<img src=\"./download.png\"><h2>RU</h2>"
}
function  qoraqalpoqtili(){
    document.getElementById("tillar").style.display="none";
    const asosiytil=document.getElementById("asosittil");
    asosiytil.innerHTML="<img src=\"./flag_rk.png\"><h2>QR</h2>"
}

