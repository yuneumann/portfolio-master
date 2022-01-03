const css = document.querySelectorAll(".css");
const js = document.querySelectorAll(".js"); 
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2"); 

btn1.style.borderColor = "lightskyblue";

function displayTag(num){
    if(num == 1){        
        for(var i = 0; i < css.length; i++){
            css[i].style.display = "block";            
        }
        btn1.style.borderColor = "lightskyblue";
        btn2.style.borderColor = "gainsboro";
    }
    if(num == 2){      
        for(var i = 0; i < css.length; i++){
            css[i].style.display = "none";
        }
        for(var i = 0; i < js.length; i++){
            js[i].style.display = "block";
        }
        btn1.style.borderColor = "gainsboro";
        btn2.style.borderColor = "lightskyblue";
    }
}