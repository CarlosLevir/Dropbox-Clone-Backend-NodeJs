const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0-afdwt.mongodb.net/dropbox?retryWrites=true`, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

app.listen(3333);
