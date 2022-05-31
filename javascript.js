window.addEventListener("load",init)


function logolar_enter(){
    

}
function logolar_out(){

}
function yazi_yazdir(){
    document.getElementById("paragraf").innerHTML = "İsmim Recep Karabulut";
}
        
function init(){
    document.getElementById("yazma").addEventListener("click",yazi_yazdir);
    
}