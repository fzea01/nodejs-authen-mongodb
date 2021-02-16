const mongoose = require('mongoose')
// const vaidator = require('validator')

mongoose.connect('mongodb+srv://fzea:activeme@cluster0.bolzh.azure.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
