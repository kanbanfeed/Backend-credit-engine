import { Router } from "express";
import { handleStripeWebhook, handleCreditBalance } from "../controller/credits.controller.js";

export const apiRouter:Router = Router();

apiRouter.post("/stripe-webhook", handleStripeWebhook);
apiRouter.get("/credits/:email", handleCreditBalance);
