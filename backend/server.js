import express from 'express'
import indexRouter from './routes/index.js'

const app = express()

// Middleware
// allow express to parse json bodies in requests
app.use(express.json());

const PORT = process.env.PORT || 3001
   
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})