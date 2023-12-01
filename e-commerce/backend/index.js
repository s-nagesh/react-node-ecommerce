require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

require('./db/config');
const UserRoute = require('./routes/User');
const ProductRoute = require("./routes/Product")
app.use(express.json());
app.use(cors())

app.use('/user', UserRoute);
app.use('/product', ProductRoute)

// app.use((req, res) => {
//     res.status(404).send('<h1>401, Page Not Found</h1>')
// })

app.listen(5000, () => {
    console.log("server listening on port 5000");
})

module.exports = app