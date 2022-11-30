let userAnswer = Number(prompt("Сумма вклада"))
let userAnswerpersent = Number(prompt("Процент"))
let procent = userAnswerpersent / 100

let resultOneyear = userAnswer + (userAnswer * procent);
let resultTwo = resultOneyear + (resultOneyear * procent);
let resultThree = resultTwo + (resultTwo * procent);
let resultFor = resultThree + (resultThree * procent);
let resultFive = resultFor + (resultFor * procent);


alert(
    "за первый год: " + resultOneyear + " рублей\n"+
    "за второй год: " + resultTwo + " рублей\n"+
    "за третий год: " + resultThree + " рублей\n"+
    "за четвертый год: " + resultFor + " рублей\n"+
    "за пятый год: " + resultFive + " рублей\n")

    