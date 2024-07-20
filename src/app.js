import express from "express"
const PORT = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'
const app = express();

app.get("/", (req, res) => {
    res.send(`API running on ${env} mode!`)
})

app.listen(PORT, () => {
    console.log(`Server running on Port:${PORT}`)
})