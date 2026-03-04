const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


 const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL")
        .then(response => response.json());

    const dolarToday = parseFloat(data.USDBRL.bid);
    const euroToday = parseFloat(data.EURBRL.bid);
    const libraToday = parseFloat(data.GBPBRL.bid);
    const pesosArgentinosToday = parseFloat(data.ARSBRL.bid);



if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}
if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}

if (currencySelect.value == 'libra') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}

if (currencySelect.value == 'pesos') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(inputCurrencyValue / pesosArgentinosToday)
}

if (currencySelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}




currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)
}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dolar americano";
        currencyImg.src = "./assets/dolar.png";
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/libra.png";

        currencyImg.style.width = "44px";
    }

    if (currencySelect.value == 'pesos') {
        currencyName.innerHTML = "Pesos argentinos";
        currencyImg.src = "./assets/pesos.png";

         currencyImg.style.width = "70px";
        }

        if (currencySelect.value == 'real') {
            currencyName.innerHTML = "Real brasileiro";
            currencyImg.src = "./assets/real.png";
        }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)







