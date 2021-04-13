import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://marcelavbc:MvBcc@cluster0.hhthg.mongodb.net/bd?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))