window.addEventListener("load",init)


function logolar_enter(){
    

}
function logolar_out(){

}
function yazi_yazdir(){
    document.getElementById("yazi").innerHTML = "İsmim Recep Karabulut\nBandırma Onyedi Eylül Üniversitesinde öğrenim görmekteyim\nBilgisayar Mühendisliği 2. Sınıf öğrencisiyim\nBildiğim diller sağ taraftaki tabloda bulunmaktadır\nBana ulaşmak isterseniz sayfanın en altında bağlantılarım bulunmaktadır\nYada direkt olarak üstte bulunan contact kısmına tıklayarak\nalttaki bağlantı kısmına ulaşabilirsiniz.";
}
        
function init(){
    document.getElementById("yazma").addEventListener("click",yazi_yazdir);
    
}