const billInput = document.querySelector("#bill_value");
const customTipInput = document.querySelector("#custom_button");
const numberOfPeopleInput = document.querySelector("#people_value");
const tipAmountValue = document.querySelector("#tip_total");
const totalValue = document.querySelector("#total");
const btnReset = document.querySelector(".reset");
const selectTipBtns = document.querySelectorAll(".mini-buttons");
const right = document.querySelector(".right");
const noZero = document.querySelector("#people");
const midiDiv = document.querySelector("#mini-div");
let save = "";
tipAmountValue.innerHTML = "$0";
totalValue.innerHTML = "$0";
///Reset butn functionality to reset all values!

btnReset.addEventListener("click", (event) => {
  billInput.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";
  tipAmountValue.innerHTML = "$0";
  totalValue.innerHTML = "$0";

  //Reset the tip percentage btns

  selectTipBtns.forEach((tipBtn) => {
    tipBtn.classList.remove("active");
  });
});
//Make the tip percentage butns clickable

selectTipBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    selectTipBtns.forEach((tipBtn) => {
      tipBtn.classList.remove("active");
    });

    event.target.classList.add("active");
    customTipInput.value = "";
    customTipInput.classList.remove("active");

    function chosenTip() {
      const innerValue = btn.innerHTML;
      const numberInner = Number(innerValue.slice(0, -1)) / 100;
      save = numberInner;
      tipPercentage();
      totalAmount();
      fixNumbers()

    }
    chosenTip();
  });
});

//Make the custom percentage butn clickable

customTipInput.addEventListener("input", () => {
  if (customTipInput.value) {
    customTipInput.classList.add("active");
    selectTipBtns.forEach((tipBtn) => {
      tipBtn.classList.remove("active");
    });
  } else {
    customTipInput.classList.remove("active");
  }
  save = Number(customTipInput.value) / 100;
  tipPercentage();
  totalAmount();
  fixNumbers()

});

const tipPercentage = function () {
  if (billInput.value && numberOfPeopleInput.value > 0 && save != "") {
    tipAmountValue.innerHTML =
      "$" +
      (
        (Number(billInput.value) * save) /
        Number(numberOfPeopleInput.value)
      ).toFixed(2);
  }
};

billInput.addEventListener("input", (event) => {
  tipPercentage();
  totalAmount();
  fixNumbers()
  
});

numberOfPeopleInput.addEventListener("input", (event) => {
  tipPercentage();
  totalAmount();
  fixNumbers()
  cantBeZero()
});

const totalAmount = function () {
  if (billInput.value && numberOfPeopleInput.value > 0 && save != "") {
    const tipAmount = parseFloat(tipAmountValue.innerHTML.replace("$", ""));
    const total = Number(billInput.value) + tipAmount;
    totalValue.innerHTML = `$${total.toFixed(2)}`;
  }
};

const fixNumbers = function () {
  if (billInput.value.length >= 6 && numberOfPeopleInput.value.length >= 1) {
    
    tipAmountValue.style.fontSize= "36px";
    totalValue.style.fontSize= "36px";
   
  }
  else{
    tipAmountValue.style.fontSize= "48px";
    totalValue.style.fontSize= "48px";
  }
};

// const cantBeZero = function () {
//   if (numberOfPeopleInput.value === 0) {
//     const zeroSpan = document.createElement("span");
//     zeroSpan.innerHTML = "can't be zero";
//     zeroSpan.classList.add("Number-error");
//     noZero.appendChild(zeroSpan);
//   }
// }
const cantBeZero = function () {
  const existingZeroSpan = document.querySelector(".Number-error");
  
  // Remove existing zeroSpan if it exists
  if (existingZeroSpan) {
    existingZeroSpan.remove();
  }

  if (numberOfPeopleInput.value === "0") {
    const zeroSpan = document.createElement("span");
    zeroSpan.innerHTML = "Can't be 0";
    zeroSpan.classList.add("Number-error");
    noZero.appendChild(zeroSpan);

// midiDiv.style.borderRadius = '5px';
midiDiv.style.border = '2px solid #E17052';
// midiDiv.style.background = '#F3F9FA';
}}

console.log("hello world");

/// 