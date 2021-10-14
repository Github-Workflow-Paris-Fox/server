const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/register", (req, res) => {
    const { email, password } = req.body;
    User.create({
        email,
        password
    })
    .then((user) => {
        res.status(201).json({ user });
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
});

app.listen(PORT, () => console.log(`ILY ${PORT}`));