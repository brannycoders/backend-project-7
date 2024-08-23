const express = require("express")
const app = express()




// API 1: Returns an array of numbers
app.get('/numbers', (req, res) => {
    res.json([1, 3, 7, 42, 99]);
});

// API 2: Returns an array of objects (people with their details)
app.get('/people', (req, res) => {
    res.json([
        { name: "Alice", age: 30, occupation: "Engineer" },
        { name: "Bob", age: 25, occupation: "Designer" },
        
    ]);
});

// API 3: Returns an array of programming languages
app.get('/languages', (req, res) => {
    res.json(["JavaScript", "Python", "Java", "C++", "Ruby"]);
});

// Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:5000`);
// });
app.listen(5000, ()=>{
    console.log("Server started running...")
})


