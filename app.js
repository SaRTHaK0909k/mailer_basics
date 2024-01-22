const nodemailer = require("nodemailer");

const html = `
    <h1>Estrella walo sunlo</h1>
    <p>Samarth ******* hai!</p>
`;

async function main() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sarthakganure123@gmail.com",
      pass: "ynmv ozhf ptjx wzyq",
    },
  });

  const info = await transporter.sendMail({
    from: "abc@gmail.com",
    to: "lcb2022040@iiitl.ac.in",
    subject: "Estrella walo sunlo(nodemailer)",
    html: html,
  });

  console.log("Message sent: " + info.messageId);
}

main().catch(console.error);
