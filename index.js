//  write a backend server that on the slash route returns the sum from 1-10

// npm init -y - - - >package.json
// out put --- > node index.js 
//npm - - ->node package manager
//EXPRESS- - - >LIBRARY---npm install express--->package-lock.json
 const express = require ('express')
 const app = express()
 const port = 3000

 function handleFirstRequest(req,res){
    res.send('Hello World!')
 }

 app.get('/', handleFirstRequest)

 function started(){
    console.log(`Example app listening on port ${port}`)
 }

 app.listen(port,started)

 
function calculatedSum(counter){
    var sum = 0;
    for(var i =0;i<counter;i++){
        sum= sum +i ;
    }
    return sum;
} 

var ans = calculatedSum(100);
console.log(ans); 