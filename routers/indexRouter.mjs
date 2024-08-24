import { Router } from 'express';

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log(req.url);

    res.sendFile(`index.html`, {
        root: `.` ,
    });
});

indexRouter.get("/about", (req, res) => { //* the "?" makes the "t" in about optional, so /abou and /about will produce the same result - It is here just for learning purposes
    res.sendFile("about.html", {
        root: `.` 
    });
});


indexRouter.get(`*`, (req, res) => {
    res.sendFile(`404.html`, {
        root: `.` 
    });
});