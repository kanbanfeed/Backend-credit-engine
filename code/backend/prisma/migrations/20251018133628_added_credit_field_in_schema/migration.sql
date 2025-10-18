/*
  Warnings:

  - Added the required column `credits` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userEmail" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "stripeCheckoutId" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Transaction" ("amount", "createdAt", "currency", "id", "stripeCheckoutId", "stripeCustomerId", "userEmail") SELECT "amount", "createdAt", "currency", "id", "stripeCheckoutId", "stripeCustomerId", "userEmail" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE UNIQUE INDEX "Transaction_stripeCheckoutId_key" ON "Transaction"("stripeCheckoutId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
