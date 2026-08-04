const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.z84vwb6.mongodb.net", (err, records) => {
  if (err) {
    console.log("ERROR:");
    console.log(err);
  } else {
    console.log("SUCCESS:");
    console.log(records);
  }
});