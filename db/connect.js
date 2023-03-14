const mongoose = require("mongoose");

const connectDB = async (url='mongodb+srv://12345:12345@cluster0.smowbqk.mongodb.net/04-STORE-API?retryWrites=true&w=majority') => {
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
