const express = require('express');
const  DATA  = require ('../chapter-4/utils/fakeData')
const app = express();

app.get('/zomato', (req, res) => {
   console.log(DATA)
    res.json(DATA);
  });
  
  // Start the server
const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });