import express from "express";


const app = express();

app.get("/", (req, res) => {
    console.log(req.url);
    
    res.send("Hello, world!")
});


app.get("/about?", (req, res) => { //* the "?" makes the "t" in about optional, so /abou and /about will produce the same result
    console.log(req.url);

    res.sendFile("about.html", {
        root: `.` 
    });
});

app.get("/c*", (req, res) => { //* the "*" after the "c" makes the route to accept any content , so /c, /casdasdas and /contact will produce the same result
    console.log(req.url);

    res.sendFile("contact.html", {
        root: `.` 
    });
});

app.get("/anyroute/*", (req, res) => { //* the "*"" allows that any route after /anyroute/ will produce the same result
    console.log(req.url);
    console.log(req.params);

    res.send(`The id is ${req.params.id}`);
});

app.get("/routeparams/:id/:testRequest", (req, res) => { //* the ":" makes the "id" and "testRequest" a parameter, so "/routeparams/123/" and "/routeparams/456" will produce the same result but return different info based on the permissions of each user - same applies to testRequest param 
    console.log(req.url);
    console.log(req.params);

    res.send(`The id is ${req.params.id}`);
});


app.get("/fileforSendFileFunction", (req, res) => {
    console.log(req.url);

    res.status(200).sendFile("fileforSendFileFunction.html", 
        { 
            root: `.` 
        });

});


app.listen(process.env.PORTEXPRESS, process.env.HOSTNAME, () => console.log(`My first Express app - listening on port ${process.env.PORTEXPRESS}!`));

