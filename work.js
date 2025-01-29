
function calculate(){
    if (billAmount.value === "" || tip.value === "") {
        alert("Please enter the values")
    }
    else{
        let billPrice = parseFloat(document.getElementById("billAmount").value)
    let tipPerc = parseFloat(document.getElementById("tip").value)

    let tipAmount = (billPrice*tipPerc)/100;
    let totalAmnt = billPrice+tipAmount;

    document.getElementById('tipamount').textContent=tipAmount.toFixed(2);
    document.getElementById('totalbill').textContent=totalAmnt.toFixed(2);
    }
    
}

function clearBtn(){
    document.getElementById("billAmount").value="";
    document.getElementById("tip").value="";
    document.getElementById("tipamount").textContent="";
    document.getElementById("totalbill").textContent="";
}









