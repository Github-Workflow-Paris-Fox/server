const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({
        where: {
            email
        }
    })
    .then((user) => {
        if (user.password === password) {
            res.status(200).json({ token: "asdfasdfasdf" });
        } else {
            res.status(401).json({ message: "invalid email or password" });
        }
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
});

app.listen(PORT, () => console.log(`ILY ${PORT}`));