const mongoose = require("mongoose");

function connect() {
  //mongoose.set("strictQuery", false);
  return new Promise((resolve, reject) => {
    // Connecting to Database and listening to server
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = connect;
