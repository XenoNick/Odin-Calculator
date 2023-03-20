const numbers = [...document.querySelectorAll('.numbers')]
const activeValue = document.querySelector('#activeValue')


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
        if (activeValue.textContent.length < 20) activeValue.append(e.target.textContent)
    })
}