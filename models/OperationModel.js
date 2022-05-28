let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    email: { type: String,
        required: true,
        unique: true
    },
    firstName: {type: String,
        default: ''
    },
    lastName: {type: String,
        default: ''
    },
    address: {type: String,
        default: ''
    },
    // book: String,
});
let OperationModel = new mongoose.model('Operation', schema);
module.exports = OperationModel;