require("dotenv").config();

const dns = require("dns");

// Force Node.js to use IPv4 first
dns.setDefaultResultOrder("ipv4first");

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 CHARIS Backend running on port ${PORT}`);
});