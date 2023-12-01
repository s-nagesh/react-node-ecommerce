

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("mongodb connect");
    })
    .catch((error) => {
        console.log("error", error);
        console.log("failed to connect");
    });
