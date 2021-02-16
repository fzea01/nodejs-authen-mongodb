const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://<Username>:<Password>@***********.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
