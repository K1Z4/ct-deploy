const express = require('express')
const app = express()

app.use(express.static('dist', { extensions: ["html"] }))

const args = process.argv.slice(2);
const port = Number.parseInt(args[0]) || 80;
app.listen(port, () => console.log(`serving on port ${port}`))