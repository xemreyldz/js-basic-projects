const btnTahminEt= document.querySelector(".btn-tahmin").addEventListener("click",StartGame);
let InputNumber = document.querySelector("#InputNumber");
let btnTekrarOyun = document.querySelector(".btn-tekrar").addEventListener("click",Again);

var randomNumber;
var kalanHak = 5 ;
randomNumber=Math.floor(Math.random()*100 + 1);
console.log(randomNumber);

function StartGame() {  
    if(InputNumber.value == ""){
        alert("Boş Geçilemez");
         btnTahminEt.disabled= false;
    }
    if(InputNumber.value == randomNumber){
        document.querySelector(".return").innerHTML = " Tebrikler Bildiniz. Sayımız."  + `${randomNumber}`;
        document.querySelector(".btn-tahmin").style.display="none";
        document.querySelector(".btn-tekrar").style.display="inline";
        document.querySelector(".return").style.color ="Green";
    }
    else if(InputNumber.value > randomNumber){
        document.querySelector(".return").innerHTML= InputNumber.value + " Sayısından KÜÇÜK değer dene";
        kalanHak -= 1;
        document.querySelector(".heart").innerHTML = "Kalan Hak : "  + `${kalanHak}`;
    }
    else{
        document.querySelector(".return").innerHTML= InputNumber.value + " Sayısından BÜYÜK değer dene";
        kalanHak -= 1;
        document.querySelector(".heart").innerHTML = "Kalan Hak : "  + `${kalanHak}`;
    }

    if(kalanHak == 0){
        document.querySelector(".return").innerHTML=" Üzgünüm  Oyun Bitti  Sayımız : " + `${randomNumber}` ;
        document.querySelector(".btn-tahmin").style.display="none";
        document.querySelector(".btn-tekrar").style.display="inline";
        document.querySelector(".return").style.color ="Red";

        
    }
}

function Again(){
    kalanHak = 5;
    randomNumber=Math.floor(Math.random()*100 + 1);
    InputNumber.value = "";
    console.log(randomNumber);
    document.querySelector(".return").innerHTML = "";
    document.querySelector(".return").style.color = "black";
    document.querySelector(".btn-tahmin").style.display="inline";
    document.querySelector(".btn-tekrar").style.display="none";
    document.querySelector(".heart").innerHTML = "Kalan Hak : "  + `${kalanHak}`;
}


