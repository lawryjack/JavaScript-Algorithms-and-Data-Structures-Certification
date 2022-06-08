
function checkCashRegister(price, cash, cid) {
    var status;
    var change = (cash - price)*100;
    var totalCash = 0;
    let moneyUnit = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1};

    for (let i of cid) {
        totalCash += i[1]*100;
    }
    if (totalCash < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else if (totalCash == change) {
        return {status: "CLOSED", change: cid};
    }
    else {
        cid = cid.reverse();
        let changeGivenOutput = []; //This needs to be defined here if it were placed below within the for loop then the function is unable to return changeGivenOutput
        //console.log("cid before: ", cid);
        for (let [key, value] of Object.entries(cid)) {
            let changeGiven = [value[0], 0];
            //let changeGivenOutput = [];
            value[1] = value[1]*100;
            while (change >= moneyUnit[value[0]] && value[1] > 0) {
                change -= moneyUnit[value[0]];
                value[1] -= moneyUnit[value[0]];
                changeGiven[1] += moneyUnit[value[0]]/100;
            }
            if (changeGiven[1] > 0) {
                changeGivenOutput.push(changeGiven);
            }
        }
        if (change > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: changeGivenOutput};
    }
  }
  
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
                                ["DIME", 3.1], ["QUARTER", 4.25], 
                                ["ONE", 90], ["FIVE", 55], 
                                ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 


   

