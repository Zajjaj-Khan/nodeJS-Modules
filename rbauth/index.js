const express = require("express");
const authStaff = require("./middleware");
const app = express();
app.use(express.json());

app.get("/auth", (req, res) => {
  res.json("Login screen");
});

app.get("/auth/staff", authStaff(["admin","staff"]),(req, res) => {
  res.json({
    complains: "xyz",
    eventDetails: new Date(),
    visit: "Qrcode",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server stared listening");
});
