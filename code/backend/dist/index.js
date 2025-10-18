"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e = require("express");
const app = e();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
