const { connect } = require("mongoose");

try {
  connect("mongodb://127.0.0.1/portfolio");
  console.log("database connected");
} catch (err) {
  throw Error(err);
}
