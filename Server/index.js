const express = require('express');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const port = 3000;
db.connect();

app.use(express.json());

route(app);
app.listen(port, () => console.log(`localhost:${port}`));