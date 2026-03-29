const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DevOps Portfolio</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #0f172a;
                    color: #ffffff;
                    text-align: center;
                    padding: 50px;
                }
                .card {
                    background: #1e293b;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 0 20px rgba(0,0,1,0.5);
                    max-width: 800px;
                    margin: auto;
                }
                a {
                    color: #40bdf8;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1> Hello Guys Welcome You All , </h1>
                <h2> Once Again in the  </h2>
                 <h3> 🚀ENCRYPTED WORLD OF VINOD MULEVA 🚀 </h3>
                <p>
                    This is a webpage made by <b>DevOps Engineer: VINOD MULEVA</b><br><br>
                    Currently working at <b>LG Electronics BO, Mumbai</b> as an IT Professional.<br><br>
                    Constantly upgrading this webpage using strategic methods to improve user experience.<br><br>
                    
                    📞 Contact: 7304701840 <br>
                    💬 WhatsApp: <a href="https://wa.me/917304701840">Click Here</a><br><br>

                    He will assist you shortly.<br><br>

                    <b> 🚀 Stay Updated & Stay Motivated 🚀</b>
                </p>
            </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});