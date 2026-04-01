const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your_app_password"
  }
});

app.post("/send-message", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "yourgmail@gmail.com",
      subject: subject,
      text: message
    });

    res.send("Message sent");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));