const mongoose = require('mongoose')

mongoose
  .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true,
    userUnifiedTopology: true
  })
  .then(()=> console.log("Connect to MONGO! 🎉"))
  .catch(() => console.error(error))

module.exports = mongoose