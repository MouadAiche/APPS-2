// GET DOM ELEMENTS
const weight = document.getElementById("weight");
const length = document.getElementById("length");
const currency = document.getElementById("currency");
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const label1 = document.getElementById("label-1");
const input1 = document.getElementById("input-1");
const label2 = document.getElementById("label-2");
const input2 = document.getElementById("input-2");


weight.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'WEIGHT CONVERTER';
    label1.textContent = 'KG'
    label2.textContent = 'G'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
length.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'LENGTH CONVERTER';
    label1.textContent = 'CM'
    label2.textContent = 'INCHES'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
currency.addEventListener("click", () => {
    welcome.textContent = ''
    title.textContent = 'CURRENCY CONVERTER';
    label1.textContent = 'MAD'
    label2.textContent = 'USD'

    input1.style.display = "flex"
    input2.style.display = "flex"

    input1.value = '';
    input2.value = '';

})
input1.addEventListener("input", () => {
  const value = parseFloat(input1.value);
  if (isNaN(value)) {
    input2.value = '';
    return;
  }

  switch (title.textContent) {
    case 'CURRENCY CONVERTER':
      input2.value = (value / 10).toFixed(2);
      break;
    case 'LENGTH CONVERTER':
      input2.value = (value / 2.54).toFixed(2);
      break;
    case 'WEIGHT CONVERTER':
      input2.value = (value * 1000).toFixed(2);
      break;
  }
});

input2.addEventListener("input", () => {
  const value = parseFloat(input2.value);
  if (isNaN(value)) {
    input1.value = '';
    return;
  }

  switch (title.textContent) {
    case 'CURRENCY CONVERTER':
      input1.value = (value * 10).toFixed(2);
      break;
    case 'LENGTH CONVERTER':
      input1.value = (value * 2.54).toFixed(2);
      break;
    case 'WEIGHT CONVERTER':
      input1.value = (value / 1000).toFixed(2);
      break;
  }
});
