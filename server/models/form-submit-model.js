const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    name: {
        type : String ,
        require : true ,
    },
    email: {
        type : String ,
        require : true ,
    },
    description : {
        type : String ,
        require : true ,
    },
})

const Form = mongoose.model('Form', FormSchema)
module.exports = Form