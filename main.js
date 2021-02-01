var display = null;

function calc(e){
    var value =e.value;
    if (display.value == "0"){
        display.value = "";
    }
    if (value =="AC"){
        display.value = "";
    }
    else if (value =="="){
        var siki = display.value;
        console.log(siki);
        try{
            var kotae = eval(siki);
            display.value = kotae;
        } catch(e){
            alert("error: " + e.message); 
        }
    }
    else{
        display.value += value;
    }
}    
    window.onload = function(){
    display = document.getElementById("display");
    display.value = "0";
    };
