const fs = require("fs");
console.log("Gaurav Jain");
fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) console.log("Error occured");
  else console.log("File written successfully");
});
