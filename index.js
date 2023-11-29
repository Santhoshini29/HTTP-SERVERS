//  write a backend server that on the slash route returns the sum from 1-10

// npm init -y - - - >package.json
// out put --- > node index.js 

function calculatedSum(counter){
    var sum = 0;
    for(var i =0;i<counter;i++){
        sum= sum +i ;
    }
    return sum;
}

var ans = calculatedSum(100);
console.log(ans); 