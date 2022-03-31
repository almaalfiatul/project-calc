const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

let prevNum = "";
let calcOpr = "";
let currNum = "";

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        updateScreen(currNum);
    });
});

const inputNumber = (number) => {
    if(currNum === "0") {
        currNum = number
    } else {
        currNum += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value)
        updateScreen(currNum);
    });
});

const oper = document.querySelectorAll(".operator");

oper.forEach((opr) => {
    opr.addEventListener("click", (e) => {
        inptOpr(e.target.value);
    });
});

const inptOpr = (opr) => {
    prevNum = currNum
    calcOpr = oper
    currNum = ""

    if(calcOpr === "") {
        prevNum = currNum
    }
    calcOpr = opr
    currNum = "0"
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currNum)
})

const calculate = () => {
    let result = ""
    switch(calcOpr) {
        case "+":
            result = parseFloat(prevNum) + parseFloat(currNum)
            break
        case "-":
            result = parseFloat(prevNum) - parseFloat(currNum)
            break
        case "*":
            result = parseFloat(prevNum) * parseFloat(currNum)
            break
        case "/":
            result = parseFloat(prevNum) / parseFloat(currNum)
            break
        default:
            break
    }
    currNum = result
    calcOpr = ""
}

const clearAll = () => {
    prevNum = ""
    calcOpr = ""
    currNum = "0"
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currNum)
})

inputDecimal = (dot) => {
    if(currNum.includes('.')) {
        return
    }
    currNum += dot
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value)
    updateScreen(currNum)
})

inputPercentage = (_percent) => {
    if(prevNum.includes('%')) {
        return
    }
    prevNum /= 100
}

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", (e) => {
    inputPercentage(e.target.value)
    updateScreen(prevNum)
})