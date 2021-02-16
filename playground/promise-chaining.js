require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6029dae33023bf56a404e446', {age: 24}).then( (user) => {
//     console.log(user)
//     return User.countDocuments({ age: 25})
// }).then((result) => {
//     console.log('count: ' + result)
// }).catch( (e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6029daa02f5e832964b62e63', 5).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})