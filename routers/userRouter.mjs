import { Router } from 'express';

export const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).sendFile(`userDashboard.html`, {
        root: `.`
    });
})

userRouter.get("/:userID/profile", (req, res) => {
    res.status(200).sendFile(`userProfile.html`, {
        root: `.`
    });
});