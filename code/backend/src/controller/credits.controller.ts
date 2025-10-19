import { Credit } from "../types/credit.types.js";
import { prisma } from "../config/prisma.js";

import { Request, Response } from "express";

export async function handleStripeWebhook(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { userEmail, amount, stripeCheckoutId, stripeCustomerId } =
      (req.body as Credit) || ({} as Credit);

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
    const stats = await prisma.transaction.aggregate({
      where: {
        userEmail,
      },
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
        credits: true,
      },
    });

    if (!stats) {
      return res.status(404).json({
        success: false,
        message: "No entries of the person found with particular email",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Entry found",
      data: {
        totalTransactions: stats._count.id,
        amountTransaction: stats._sum.amount || 0,
        creditsIssued: stats._sum.credits || 0,
      },
    });
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

export async function handleUserInfo(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const userInfo = await prisma.transaction.findMany({});

    if (!userInfo) {
      return res
        .status(400)
        .json({ success: false, message: "No info of users found", data: {} });
    }

    return res
      .status(200)
      .json({ success: true, message: "Info found", data: userInfo });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

export async function handleCreditDetails(req: Request, res: Response) {
  try {
    const stats = await prisma.transaction.aggregate({
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
        credits: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Credit calculation successful",
      data: {
        totalTransactions: stats._count.id,
        amountTransaction: stats._sum.amount || 0,
        creditsIssued: stats._sum.credits || 0,
      },
    });
  } catch (error) {
    console.error("Error fetching credit details:", error);
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}
