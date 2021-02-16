require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6029da2f0e2246375097a6ae').then( (user) => {
//     console.log(user)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log('count: ' + result)
// }).catch( (e) => {
//     console.log(e)
// })

const deleteTaskandCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskandCount('6029da652f5e832964b62e62').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})