const express=require("express");
const bodyParser = require('body-parser');
const bookRoute=require("./routes/Books");
const db=require("./db/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('', bookRoute);
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});
 


