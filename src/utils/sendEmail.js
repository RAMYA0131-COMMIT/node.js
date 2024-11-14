const nodemailer = require("nodemailer");

const mailSend = async (email, userName, password) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_Id,   
                pass: process.env.PASS_KEY,
            },
        });

        const mailOptions = {
            from: process.env.Email_Id,
            to: email,
            subject: "Welcome to our website",
            text: `Hello ${userName},This is your password: ${password}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Mail Sent Successfully...");
        
    } catch (err) {
        console.log("Error sending mail:", err);
    }
};

module.exports = mailSend;
