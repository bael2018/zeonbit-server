require("dotenv").config();
const models = require('./models/models')
const express = require("express");
const sequelize = require("./db");
const app = express();
const cors = require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use('/api' , router)

app.get('/' , (req , res) => {
    res.json({message: 'sdfsd'})
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

start();
