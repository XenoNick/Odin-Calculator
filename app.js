const numbers = [...document.querySelectorAll('.numbers')]
const activeValue = document.querySelector('#activeValue')
const [operand, operator] = [...document.querySelectorAll('.expression')]
const clearbutton = document.querySelector('.clear')
const deletebutton = document.querySelector('.delete')
const arithmeticOperators = [...document.querySelectorAll('.arithmetic')]
const equalButton = document.querySelector('.equals')
const negativeButton = document.querySelector('.negative')
const decimal = document.querySelector('.dot')

const myMath = {
    add(x, y) {
        return x + y
    },
    subtract(x, y) {
        return x - y
    },
    multiply(x, y) {
        return x * y
    },
    divide(x, y) {
        return x / y
    },
}

function operate(operator, operandX, operandY) {
    if (operator === '+') return myMath.add(operandX, operandY)
    else if (operator === '-') return myMath.subtract(operandX, operandY)
    else if (operator === '*') return myMath.multiply(operandX, operandY)
    else if (operator === '/') return myMath.divide(operandX, operandY)
    return 'ERROR'
}

for (let number of numbers) {
    number.addEventListener('click', (e) => {
        if (activeValue.textContent.length < 20) {
            activeValue.append(e.target.textContent)
        }
    })
}

function clearDisplay() {
    activeValue.textContent = ''
    operand.textContent = ''
    operator.textContent = ''
}

clearbutton.addEventListener('click', clearDisplay)

deletebutton.addEventListener('click', () => {
    activeValue.textContent = activeValue.textContent
        .slice(0, activeValue.textContent.length - 1)
})

for (let arithmeticOperator of arithmeticOperators) {
    arithmeticOperator.addEventListener('click', (e) => {
        if (activeValue.textContent === '' || activeValue.textContent === '-') return;
        if (operator.textContent === '') {
            operand.textContent = activeValue.textContent + ' '
            activeValue.textContent = ''
            operator.textContent = e.target.textContent
        } else {
            const result = String(operate(operator.textContent, +operand.textContent,
                +activeValue.textContent))
            operand.textContent = result + ' '
            operator.textContent = e.target.textContent
            activeValue.textContent = ''
        }
    })
}

equalButton.addEventListener('click', () => {
    if (operand.textContent === '' || activeValue.textContent === '' ||
        activeValue.textContent === '-') return;
    const result = String(operate(operator.textContent, +operand.textContent,
        +activeValue.textContent))
    clearDisplay()
    activeValue.textContent = result
})

negativeButton.addEventListener('click', () => {
    if (activeValue.textContent.includes('-')) {
        activeValue.textContent = activeValue.textContent.slice(1)
    } else {
        activeValue.textContent = '-' + activeValue.textContent
    }
})

decimal.addEventListener('click', () => {
    if(activeValue.textContent.includes('.')) return;
    if(activeValue.textContent === '' || activeValue.textContent === '-'){
        activeValue.textContent += '0.'
    }else{
        activeValue.textContent += '.'
    }
})