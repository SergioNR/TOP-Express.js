import { Router } from "express";

export const testRequestsRouter = Router();

testRequestsRouter.get(`/list/:userID/`, (req, res) => {
    res.status(200).send(`GET request to the holahola API/v1/testRequests/list/${req.params.userID}/ endpoint`);

    // return retrieveUserTestRequests(req.params.userID); // TODO - Implement this function + ongoDB

});

testRequestsRouter.post(`/create/:userID/`, (req, res) => {
    res.status(200).send(`POST request to the holahola API/v1/testRequests/list/${req.params.userID}/ endpoint`);

    // return createUserTestRequest(req.params.userID); // TODO - Implement this function + ongoDB

});