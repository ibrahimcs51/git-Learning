
for(let i = 0; i < 5; i++) {
    console.log("Hello World");
}       

console.log("This is a loop iteration: " + i);

for(let i = 0; i < 5; i++) {
    console.log("Hello World");
}       
console.log("This is a loop iteration: " + i);

const app = require('express');
const path = require('path'); 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});       
const path = require('path');       
