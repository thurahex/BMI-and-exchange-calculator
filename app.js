const ft = document.querySelector("#ft")
const inch = document.querySelector("#in")
const w = document.querySelector("#w")
const rs = document.querySelector("#result")

let hInCm =0
let stat = "(Normal)"
let kg = 0
let cmTo =0
let bmi =0
const onePoundInKg =0.45359237



function cal(){
 if(ft.value!==""&& inch.value!==""&&w.value!==""){

 
 hInCm = ft.value*30.48+inch.value*2.54
 cmTo = hInCm/100
 let h = 0
 h =cmTo*cmTo
 kg = w.value * onePoundInKg

 bmi = kg/h

 if(bmi<=24.9&&bmi>=18.5){
    stat ="(Healthy)"
    rs.style.color="green"
}
if(bmi<=29.9&&bmi>=25.0){
    stat ="(Overweight)"
    rs.style.color="blue"
}

    if(bmi<18.5){
        
        stat="(Underweight)"
        rs.style.color="orange"
    }
    if(bmi>=30){
        
        stat="(Obesity)"
        rs.style.color="black"
    }

    
    rs.innerHTML=`${bmi.toFixed(2) +stat } `
}
else{
    rs.innerHTML="Give full Info"
    rs.style.color="orange"
    return 0
}

}

// currency exchange 

const fromX = document.querySelector("#from")
const toX = document.querySelector("#to")
const x = document.querySelector("#x")
const Xresult = document.querySelector("#Xresult")
const exchangeRates = {
    usd:1,
    sgd:1.37,
    mmk:2109.05
}

function convert(amount,fromCurrency,toCurrency){
    if(exchangeRates[fromCurrency]&&exchangeRates[toCurrency]){
        const convertedAmount=(amount/exchangeRates[fromCurrency]*exchangeRates[toCurrency])
        return convertedAmount.toFixed(2)
    }else{
        return "invaild currency code "
    }
}

function go(){
    Xresult.innerHTML=`${convert(x.value,fromX.value,toX.value)+" " + toX.value}`
}