const express = require('express');

const PORT = 3124;

const app = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));