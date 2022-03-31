const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//menginisialisasi variable
let prevNum = "";
let calcOpr = "";
let currNum = "";

//javascript untuk input number
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

//javascript untuk input operation
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

//javascript untuk tombol (=)
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currNum)
})

//javascript untuk kalkulasi operation 
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

//javascript untuk membersihkan layar
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

//javascript untuk input decimal
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

//javascript untuk input persen (tapi belum bisa berjalan)
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
