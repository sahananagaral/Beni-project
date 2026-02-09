const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const facts = [
    { id: 1, fact: "The sun is a star." },
    { id: 2, fact: "Water boils at 100°C." },
    { id: 3, fact: "Earth has one moon." },
    { id: 4, fact: "JavaScript runs in the browser." },
    { id: 5, fact: "The sky is blue."},
    { id: 6, fact: "Mercury is in liquid state"},
    { id : 7, fact:"hello"}
]

app.get("/",(req,res)=>{
    res.send("Facts API is running")
});

app.get("/api/facts",(req,res)=>{
    res.status(200).json(facts)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})