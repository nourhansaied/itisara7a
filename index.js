

import express from 'express'
import connection from './db/connection.js'
import userRoutes from './modules/user/user.routes.js'
const app = express()
const port = 3000
connection()
app.use(express.json())

app.use(userRoutes);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))