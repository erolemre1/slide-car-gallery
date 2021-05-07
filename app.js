var models = [
    {
        name : "BMW 520d",
        image: "./image/bmw 520d.jpg",
        link: "https://www.sifiraracal.com/bmw-fiyat-listesi",
       featuretitle: "Teknik Özellikler",
       featuretext:"Silindir Hacmi:1995 cc\nYakıt Tipi:Dizel\nŞanzıman Türü:Otomatik\nBeygir Gücü (Toplam):190 hp\n0-100 Km Hızlanma:7.5 saniye\nKarma Tüketim (100 km):4.7 lt.\nÇekiş:Arkadan Çekişli"
      
    
    
      
    },
    {
        name : "VOLVO S90",
        image: "./image/volvo s90.jpg",
        link: "https://www.sifiraracal.com/volvo-modelleri/s90",
        featuretitle: "Teknik Özellikler",
        featuretext:"Silindir Hacmi:1969 cc \nYakıt Tipi:Dizel\n Şanzıman Türü:Otomatik\n Beygir Gücü (Toplam):235 hp\n 0-100 Km Hızlanma:7.3 saniye\n  Karma Tüketim (100 km):5.1 lt. \nÇekiş:4x4 Çekişli"
    },
    {
        name : "HONDA FC5",
        image: "./image/honda fc5.jpg",
        link: "https://www.sifiraracal.com/honda-fiyat-listesi",
        featuretitle: "Teknik Özellikler",
        featuretext:"Silindir Hacmi:1498 cc\nYakıt Tipi:Benzin\nŞanzıman Türü:Manuel\nBeygir Gücü (Toplam):182 hp\n0-100 Km Hızlanma:8.0 saniye\nKarma Tüketim (100 km):5.5 lt.\nÇekiş:Önden Çekişli"
    },
    {
        name : "BMW 316i",
        image: "./image/bmw.jpg",
        link: "https://www.sifiraracal.com/bmw-fiyat-listesi",
        featuretitle: "Teknik Özellikler",
        featuretext:"Silindir Hacmi:1598 cc\nYakıt Tipi:Benzin\nŞanzıman Türü:Otomatik\nBeygir Gücü (Toplam):136 hp\n 0-100 Km Hızlanma:9.2 saniye\nKarma Tüketim (100 km):5.8 lt.\nÇekiş:Arkadan Çekişli"
    },
];
var index =3;
var slayt = models.length;
var interval ;
var settings= {
    duration : "2000",
    random : true,
}

init(settings);

document.querySelector(".bi-arrow-left-square-fill").addEventListener("click",function(){
    index--;
    showSlide(index);
    console.log(index);
}) 



document.querySelector(".bi-arrow-right-square-fill").addEventListener("click",function(){
    index++;
    showSlide(index);
console.log(index)
}) 

document.querySelectorAll(".bi").forEach(function(item){
    item.addEventListener("mouseenter",function(){

        clearInterval(interval);
    })
})

document.querySelectorAll(".bi").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
})
function init(settings){

    var prev;
interval=setInterval(function(){

if(settings.random){
    console.log(index)
    do{
        index = Math.floor(Math.random()*slayt);
    }while(index==prev)
    prev=index


}else{

    if(slayt==index+1){
        index=-1;
    }
    showSlide(index);
    
    index++;

}
showSlide(index);
},settings.duration)
    



}




function showSlide(i){

    index = i;
    if(i<0){
        index= slayt -1;
    }
if (i>=slayt){
    index =0;
}

    document.querySelector(".card-title").textContent= models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".cardlight").setAttribute("href",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    document.querySelector(".cardtitleh").textContent=models[index].featuretitle;
    document.querySelector(".cardtext").textContent=models[index].featuretext;
    
    

}

