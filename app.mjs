import express from "express";


const app = express();

app.get("/", (req, res) => {
    console.log(req.url);
    
    res.send("Hello, world!")
});

console.log(`this is working`)


app.listen(process.env.PORTEXPRESS, process.env.HOSTNAME, () => console.log(`My first Express app - listening on port ${process.env.PORTEXPRESS}!`));

