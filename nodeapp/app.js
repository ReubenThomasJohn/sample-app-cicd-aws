const express = require("express");
const app = express();

app.get("/", (req, resp) => {
    resp.send("Service is up and running");
});

app.listen(8080, () => {
    console.log("Server is up");
});