
var textarray = document.getElementById('text_array');
var text = "Hi it's me Aman Kumar Verma";


function typeText(element,data,i=0){

    if(i===0){
        element.textContent = "";
    }
    element.textContent += data[i];

   if(i===data.length-1)
   {
        return;
   }
    setTimeout(()=>typeText(textarray,text,i+1),70);
    
}

     typeText(textarray,text);  
   




   


