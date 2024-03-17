const express = require('express');
const app = express();
const port = 8080;
function sum(n){
    let ans = 0;
    for(let i =0 ; i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
app.get('/',(req,res)=>{
    const n = req.query.n
    const ans = sum(n);
    res.send(`sum from 0 to ${n} is ${ans}`);
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})