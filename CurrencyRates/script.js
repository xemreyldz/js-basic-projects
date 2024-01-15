//Elementleri Seçme
const amountInput=document.querySelector('#amount');
const firstOption=document.querySelector('#firstCurrencyOption');
const secondOption=document.querySelector('#secondCurrencyOption');
const resultInput=document.querySelector('#result');
const btnCalculate=document.querySelector('#btnCalculate');

const currncy = new Currency();

runEventListeners();

function runEventListeners(){
    btnCalculate.addEventListener('click',Cevir)  
}
function Cevir(){
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    if(amountInput.value <= 0){
        alert("Geçersiz Sayı ");
        amountInput.value = "";
        
    }


    currncy.exchange(amount, firstOptionValue, secondOptionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(2)
    })
}