const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use( (req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use( (req, res, next) => {
//     res.status(503).send('Site is currenty down. Check back soon!')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})



const User = require('./models/user')
const Task = require('./models/task')

const main = async () => {
    // const task = await Task.findById('602b6b2ea1a0fe242cc81170')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('602b6a1e77271148485a6d2f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()