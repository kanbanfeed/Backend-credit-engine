import { Transaction } from "../types/transaction.types.js";
import { prisma } from "../config/prisma.js";

import { Request, Response } from "express";

export async function handleStripeWebhook(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { userEmail, amount, stripeCheckoutId, stripeCustomerId } =
      (req.body as Transaction) || ({} as Transaction);

    if (!userEmail || !amount || !stripeCheckoutId || !stripeCustomerId) {
      return res.status(400).json({
        success: false,
        error: "Invalid user payload with missing fields.",
        data: {},
      });
    }

    const credits = Math.floor(Number(amount));

    const createTransactionData = await prisma.transaction.create({
      data: {
        userEmail,
        amount,
        stripeCheckoutId,
        stripeCustomerId,
        credits,
      },
    });
    if (!createTransactionData) {
      return res.status(404).json({
        success: false,
        message: "Error creating entry in DB",
        data: {},
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Successfully entry created", data: {} });
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        success: false,
        message: "Internal Server Error",
        data: {},
      });
    }
  }
}

export async function handleCreditBalance(req: Request, res: Response) {
  try {
    const userEmail = req.params.email;
    console.log("userEmail: ", userEmail);

    if (!userEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email missing", data: {} });
    }

    const userData = await prisma.transaction.findMany({
      where: {
        userEmail: userEmail,
      },
    });

    if (!userData || userData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No entries of the person found with particular email",
        data: {},
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Entry found", data: userData });

  } catch (error) {
    console.error("Error in handleCreditBalance:", error);
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}