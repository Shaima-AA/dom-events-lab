

//1.caching
const numberElements = document.querySelectorAll('.number')
const operatorElements = document.querySelectorAll('.operator')
const equalsElement = document.querySelector('.equals')
const display = document.querySelector('.display')
const clearElement = document.querySelector('.button.clear')
//2.console
console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
console.log(display)
console.log(clearElement)



let number1 = ''
let number2 = ''
let operator = ''





//3.functions
function handleClickNumber(event) {
    console.log(event.target.textContent)

    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
    } else if (number1 && !number2 && !operator) {
        number1 += event.target.textContent
    } else if (number1 && !number2 && operator) {
        number2 = event.target.textContent
    }


    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`operator: ${operator}`)

    display.textContent = number1 + operator + number2
}

function handleClickOperator(event) {
    console.log('clicked on operator')

    if (number1 && !number2 && !operator)
        operator = event.target.textContent
    display.textContent = number1 + operator + number2
}

function handleClickEquals() {
    console.log('clicked on equals')

    if (number1 && number2 && operator === '+') {
        number1 = String(Number(number1) + Number(number2))
    } else if (number1 && number2 && operator === '-') {
        number1 = String(Number(number1) - Number(number2))
    } else if (number1 && number2 && operator === '*') {
        number1 = String(Number(number1) * Number(number2))
    } else if (number1 && number2 && operator === '/') {
        number1 = String(Number(number1) / Number(number2))
    }

    number2 = ''
    operator = ''

    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`operator: ${operator}`)

    display.textContent = number1 + operator + number2
}

function handleClickClear() {
    console.log('clicked on clear')

    number1 = ''
    number2 = ''
    operator = ''

    display.textContent = ''
}




//4.add event listner
equalsElement.addEventListener('click', handleClickEquals)

for (let oneNumElement of numberElements) {
    oneNumElement.addEventListener('click', handleClickNumber)
}

for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}

clearElement.addEventListener('click', handleClickClear)