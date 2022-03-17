const request = require('request');
const fs = require('fs');
const args = process.argv;

const fetcher = (link, location) => {
  
  request(link, (error, response, body) => {
    
    fs.writeFile(location, body, error => {
      if (error) {
        console.log("Error:", error);
        return;
      }

      console.log(`Downloaded and saved ${body.length} to ${location}`);

    });
  });
};

fetcher(args[2], args[3]);