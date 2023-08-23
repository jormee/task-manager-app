const mongoose = require("mongoose");

const connectionURL = `mongodb+srv://${process.env.ATLAS_CLUSTER_USERNAME}:${process.env.ATLAS_CLUSTER_PASS}@nodetaskmanager.d3afl1g.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = () => {
  return(
    mongoose
    .connect(connectionURL)
  )
}

module.exports = connectDB