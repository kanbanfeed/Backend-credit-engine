-- CreateTable
CREATE TABLE "Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_email_key" ON "Transactions"("email");
