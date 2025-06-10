// GET DOM ELEMENTS
const weight = document.getElementById("weight");
const length = document.getElementById("length");
const currency = document.getElementById("currency");
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const unit1 = document.getElementById("unit-1");
const unit2 = document.getElementById("unit-2");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

const units = {
    weight: ['kg', 'g', 'lb'],
    length: ['cm', 'inch', 'm'],
    currency: ['MAD', 'USD', 'EUR']
};

function populateUnits(type) {
    const options = units[type].map(u => 
        `<option value="${u}">${u}</option>`
    ).join('');
    
    unit1.innerHTML = options;
    unit2.innerHTML = options;
}

weight.addEventListener("click", () => {
    welcome.textContent = '';
    title.textContent = 'WEIGHT CONVERTER';
    populateUnits('weight');
    input1.style.display = "flex";
    input2.style.display = "flex";
    input1.value = '';
    input2.value = '';
});

length.addEventListener("click", () => {
    welcome.textContent = '';
    title.textContent = 'LENGTH CONVERTER';
    populateUnits('length');
    input1.style.display = "flex";
    input2.style.display = "flex";
    input1.value = '';
    input2.value = '';
});

currency.addEventListener("click", () => {
    welcome.textContent = '';
    title.textContent = 'CURRENCY CONVERTER';
    populateUnits('currency');
    input1.style.display = "flex";
    input2.style.display = "flex";
    input1.value = '';
    input2.value = '';
});

input1.addEventListener("input", () => {
    const value = parseFloat(input1.value);
    if (isNaN(value)) {
        input2.value = '';
        return;
    }

    const from = unit1.value;
    const to = unit2.value;

    input2.value = convert(title.textContent, value, from, to);
});

input2.addEventListener("input", () => {
    const value = parseFloat(input2.value);
    if (isNaN(value)) {
        input1.value = '';
        return;
    }

    const from = unit2.value;
    const to = unit1.value;

    input1.value = convert(title.textContent, value, from, to);
});

function convert(type, value, from, to) {
    if (from === to) return value.toFixed(2);

    if (type === 'WEIGHT CONVERTER') {
        const rates = { kg: 1, g: 1000, lb: 2.20462 };
        return (value * rates[to] / rates[from]).toFixed(2);
    }

    if (type === 'LENGTH CONVERTER') {
        const rates = { cm: 1, inch: 0.393701, m: 0.01 };
        return (value * rates[to] / rates[from]).toFixed(2);
    }

    if (type === 'CURRENCY CONVERTER') {
        const rates = { MAD: 1, USD: 0.1, EUR: 0.09 };
        return (value * rates[to] / rates[from]).toFixed(2);
    }

    return '';
}
