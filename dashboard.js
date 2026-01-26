let stocksBought = 0;
let dataStocks = null;

function renderDashboard () {
    location.hash = "/dashboard"

    app.replaceChildren();
    const template = document.getElementById("dashboard-template");
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

    const button = document.getElementById("submitButton");
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");
    const buttonSimulate = document.getElementById("investedButton");
    const stocks = document.getElementById("moneyInvested"); 
    buttonSimulate.addEventListener('click', () => {
        setStocks(stocks)
    });
    button.addEventListener('click', getTickerData)
}

async function getTickerData() {
    const value = userInput.value;
        if (!value) {
            output.textContent = "Please enter a ticker name!";
            return;
        }
        fetch(`http://localhost:8080/data?ticker=${value}`, {
            credentials: "include"
        })
        .then(async res =>  {
            const currentUserName = res.headers.get("Username");
            const data = await res.json();
            return ({ data, currentUserName });
        })
        .then(({data, currentUserName}) => {
            //output.textContent = `User: ${currentUserName}\nData: ${JSON.stringify(data)}`;
            output.textContent = `Hello ${currentUserName}!`;
            drawGraph(data);
            const investmentResult = document.getElementById("InvestmentResult");
            let result = computeInvestment(data.map(i => i.close));
            const formated = result.toFixed(2);
            investmentResult.textContent = `Result of investment: ${formated} $`;

        })
        .catch(err => {
            output.textContent = `Error: ${err.message}`
        })
        
}

function setStocks (stocks) {
    stocksBought = Number(stocks.value);
    console.log(`Current stock: ${stocksBought}`)
    
}

function computeInvestment (data) {
    //console.log(`Data: ${data}`)
    if (!stocksBought) {
        console.log("No stocks data available");
        return;
    }
    let initialMoney = data[0] * stocksBought;
    let finalMoney = data[data.length - 1] * stocksBought;
    let result = Number(finalMoney-initialMoney);

    console.log(`Initial Money: ${initialMoney}\nFinal Monet: ${finalMoney}\nResult: ${result} `);
    return result;
}






