const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const dbconfig = require('./db/dbconfig');

const { Pool } = require('pg');

const pool = new Pool(dbconfig);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


