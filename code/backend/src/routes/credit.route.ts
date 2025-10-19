import { Router } from "express";
import {
  handleStripeWebhook,
  handleCreditBalance,
  handleUserInfo,
  handleCreditDetails
} from "../controller/credits.controller.js";

export const apiRouter: Router = Router();

apiRouter.post("/stripe-webhook", handleStripeWebhook);
apiRouter.get("/credits/:email", handleCreditBalance);

apiRouter.get("/user-info", handleUserInfo);
apiRouter.get('/credits-details', handleCreditDetails)