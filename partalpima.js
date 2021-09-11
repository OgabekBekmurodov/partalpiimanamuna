const express=require('express');
const app=express();

function korinish(){
    $(document).ready(function(){
        if(document.getElementById("korinishlar").className=="korinishlar"){
            $(".korinishlar").addClass("active");
        }
        else{
            $(".korinishlar.active").removeClass("active");
        }
    })
    app.get('5500/index.html' ,(req,res) => {

    })
}

function maktablar(){

    $(document).ready(function(){
      if(document.getElementById("maktablar").className=="maktablar"){
          $(".maktablar").addClass("active");
          $(".maktablarga-qabul.active").removeClass("active");
          $(".xizmatlar.active").removeClass("active");
          $(".yangiliklar.active").removeClass("active");
          $(".maktab-hayoti.active").removeClass("active");
          $(".korinishlar.active").removeClass("active");
      }
     else{
        $(".maktablar.active").removeClass("active");
       
       
    }
     
    })
   }
   function maktablargaqabul(){

    $(document).ready(function(){
      if(document.getElementById("maktablarga-qabul").className=="maktablarga-qabul"){
          $(".maktablarga-qabul").addClass("active"); 
          $(".maktablar.active").removeClass("active");
          $(".xizmatlar.active").removeClass("active");
          $(".yangiliklar.active").removeClass("active");
          $(".maktab-hayoti.active").removeClass("active");
          $(".korinishlar.active").removeClass("active");
      }
     else{
       
        $(".maktablarga-qabul.active").removeClass("active");
       
    }
     
    })
   }
   function xizmatlar(){

    $(document).ready(function(){
      if(document.getElementById("xizmatlar").className=="xizmatlar"){
          $(".xizmatlar").addClass("active"); 
          $(".maktablar.active").removeClass("active");
          $(".maktablarga-qabul.active").removeClass("active");
          $(".yangiliklar.active").removeClass("active");
          $(".maktab-hayoti.active").removeClass("active");
          $(".korinishlar.active").removeClass("active");
      }
     else{
       
        $(".xizmatlar.active").removeClass("active");
       
    }
     
    })
   }
   function yangiliklar(){

    $(document).ready(function(){
      if(document.getElementById("yangiliklar").className=="yangiliklar"){
          $(".yangiliklar").addClass("active"); 
          $(".maktablar.active").removeClass("active");
          $(".maktablarga-qabul.active").removeClass("active");
          $(".xizmatlar.active").removeClass("active");
          $(".maktab-hayoti.active").removeClass("active");
          $(".korinishlar.active").removeClass("active");
      }
     else{
       
        $(".yangiliklar.active").removeClass("active");
       
    }
     
    })
   }
   function maktabhayoti(){

    $(document).ready(function(){
      if(document.getElementById("maktab-hayoti").className=="maktab-hayoti"){
          $(".maktab-hayoti").addClass("active"); 
          $(".maktablar.active").removeClass("active");
          $(".maktablarga-qabul.active").removeClass("active");
          $(".xizmatlar.active").removeClass("active");
          $(".yangiliklar.active").removeClass("active");
          $(".korinishlar.active").removeClass("active");
      }
     else{
       
        $(".maktab-hayoti.active").removeClass("active");
       
    }
     
    })
   }
   function tana(){
       $(document).ready(function(){
        $(".maktablar.active").removeClass("active");
        $(".maktablarga-qabul.active").removeClass("active");
        $(".xizmatlar.active").removeClass("active");
        $(".yangiliklar.active").removeClass("active");
        $(".maktab-hayoti.active").removeClass("active");
        document.getElementById("ochiq-menu-yopiq").style.left="-300px";
  
       
       })
   }
   function ochishyopish(){
       document.getElementById("ochiq-menu-yopiq").style.left="0px";
       document.getElementById("yopiqmenuniyopish").style.display="block";
   }
   function yopiqmenuniyopish() {
    document.getElementById("ochiq-menu-yopiq").style.left="-300px";
    document.getElementById("yopiqmenuniyopish").style.display="none";

       
   }
   setInterval(function() {
       document.getElementById("telefonnibaholash").style.padding="90px";
       
   }, 2000);