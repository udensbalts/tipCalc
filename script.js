const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

/*Rēķina dzeramnaudas summu*/
calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";

  /*Pārbauda vai vērtība nav 0 un izvada summu cik jāmaksā*/ 
  if(tip === "NaN"){
    tipAmount.textContent = "Nav jāmaksā";
    showTipAmount();
  }
  else{
    tipAmount.textContent = "Jāmaksā $" + tip + " katram";
    showTipAmount();
  }
}

showTipAmount = () => {

  var x = document.querySelector("#tip-amount");
  // Pievieno klasi iekš DIV
  x.className = "show";
  // Pēc 7 sekundēm pazūd
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 7000);
}