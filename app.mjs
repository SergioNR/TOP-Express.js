import express from "express";
import { userRouter } from "./routers/userRouter.mjs";
import { indexRouter } from "./routers/indexRouter.mjs";
import { testRequestsRouter } from "./API/v1/testRequests.mjs";



const app = express(); //* To be able to connect to the server in localhost, i need to use HTTP, not HTTPS



app.use(`/user/`, userRouter)

app.use(`/api/v1/testRequests`, testRequestsRouter);

app.use(`/`, indexRouter); //* This HAS to be the last route, otherwise it will override the other routes


app.listen(process.env.PORTEXPRESS || 5500, process.env.HOSTNAME, () =>
  console.log(
    `EXPRESS server running at http://${process.env.HOSTNAME}:${process.env.PORTEXPRESS}!`
  )
);


