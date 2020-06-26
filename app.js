getvalue()
function getnumber(number){
    var inp = document.getElementById("inp");
    inp.value += number;
}

function clearinp(){
    var inp = document.getElementById("inp");
    inp.value ="";
}
function answer(){
    var inp = document.getElementById("inp");
    inp.value =eval(inp.value);
}
