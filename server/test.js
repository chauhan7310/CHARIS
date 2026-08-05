const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://wedding-admin:Pallavi7310@cluster0.z84vwb6.mongodb.net/charis?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("Connected");
  process.exit();
})
.catch(err => {
  console.error(err);
});